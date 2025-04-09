import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar"
import CompanyHeader from "../components/CompanyHeader";
import OrganizationDetails from "../components/OrganizationDetails";
import ContactDetails from "../components/ContactDetails";
import PhotoSection from "../components/PhotoSection";
import Modal from "../components/Modal"

import NameEditDialog from "../dialogs/NameEditDialog";
import CompanyDeleteDialog from "../dialogs/CompanyDeleteDialog";
import OrganizationDialog from "../dialogs/OrganizationDialog";
import ContactDialog from "../dialogs/ContackDialog";

import {
  getAuthToken,
  fetchOrganization,
  updateOrganization,
  deleteOrganization,
  uploadImage,
  deleteImage,
  fetchContact,
  updateContact
} from "../services/api";

const OrganizationPage = () => {
  const [organization, setOrganization] = useState(null);
  const [contact, setContact] = useState(null);
  const [token, setToken] = useState("");
  const [modalState, setmodalState] = useState(null);
  const [deleteState, setDeleteState] = useState(null);
  const [companyData, setCompanyData] = useState(null);;
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const authToken = await getAuthToken("USERNAME");
     
      const contactData = await fetchContact(16, authToken);
      
      const orgData = await fetchOrganization(12, authToken);
      setToken(authToken);
      setContact(contactData);
      setOrganization(orgData);      
    };

    fetchData();
  }, []);


  const handleEditOrg = async (name) => {
    // Logic to edit organization.
    setmodalState(false);
    const updatedOrg = await updateOrganization(12, { name: name}, token);
    setOrganization(updatedOrg);
  };

  const handleDeleteOrg = async () => {
    await deleteOrganization(12, token);
    setOrganization(null);
    setDeleteState(false);
  };

  const handleUpdateOrg = async (data) => {
    const updateData = {
      "businessEntity": data.businessEntity,
      "contract": {
          "no": data.agreementNumber,
          "issue_date": data.agreementDate,
      },
      "type": data.type
  };
    const updatedOrg = await updateOrganization(12, updateData, token);
    setOrganization(updatedOrg);
    setCompanyData(false);
  }

  const handleEditContact = async (data) => {

    const name = data.person.split("", 1);
    console.log(name,"NAMEEEEEEEEE")
    const updateData = {
      "lastname": name[0],
      "firstname": data.person.substring(data.person.indexOf(" ") + 1),
      "phone": data.phoneNumber,
      "email": data.email
   }
    const editContact = await updateContact(16, updateData, token);
    setContact(editContact);
    setContactData(false);
  };

  const handleDeleteContact = async () => {
    await deleteOrganization(12, token);
    setOrganization(null);
  };

  const handleUploadImage = async (file) => {
    const newImage = await uploadImage(12, file, token);
    setOrganization((prev) => ({
      ...prev,
      photos: [...prev.photos, newImage],
    }));
  };

  const handleDeleteImage = async (imageName) => {
    await deleteImage(12, imageName, token);
    setOrganization((prev) => ({
      ...prev,
      photos: prev.photos.filter((img) => img.name !== imageName),
    }));
  };

  if (!organization) return <div>Loading...</div>;
  return (
    <div className="flex h-screen bg-gray-50 font-sans ">
      <Sidebar />
      <main className="flex-1 p-12">
      <CompanyHeader name={organization.name} onEdit={()=>setmodalState(true)} onDelete={()=>setDeleteState(true)} />
        <Modal isOpen={modalState} onClose={()=>setmodalState(false)} >
          <NameEditDialog name={organization.name} onCancel={()=>setmodalState(false)} onSave={handleEditOrg}/>
        </Modal>
        <Modal isOpen={deleteState} onClose={()=>setDeleteState(false)} >
          <CompanyDeleteDialog onCancel={()=>setDeleteState(false)} onSave={handleDeleteOrg}/>
        </Modal>
        {companyData?<OrganizationDialog organization={organization} onSave={handleUpdateOrg} onClose={()=>setCompanyData(false)} />:
        <OrganizationDetails
          onEdit={()=>setCompanyData(true)}
          onDelete={handleDeleteOrg}
          title="Company Details"
          fields={[
            { label: "Agreement:", value: organization.contract.no + "/" + organization.contract.issue_date},
            { label: "Business entity:", value: organization.businessEntity} ,
            { label: "Company type:", value: organization.type.join(',')}
          ]}
        />}
        {contactData?<ContactDialog contact={contact} onSave={handleEditContact} onClose={()=>setContactData(false)} />:
        <ContactDetails
          onEdit={()=>setContactData(true)}
          title="Contacts"
          fields={[
            { label: "Responsible person:", value: contact.firstname +" "+ contact.lastname },
            { label: "Phone number:", value: contact.phone},
            { label: "E-mail:", value: contact.email}
          ]}
       />}
      <PhotoSection photos={organization.photos} onUpload={handleUploadImage} onDelete={handleDeleteImage} />
      </main>
    </div>
  );
};

export default OrganizationPage;