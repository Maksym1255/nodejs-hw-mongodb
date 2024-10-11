import { ContactsCollection } from '../db/models/contacts.js';

export const getAllContacts = async () => {
  const contacts = await ContactsCollection.find();
  return contacts;
};

export const getContactById = async (contactId) => {
  const contact = await ContactsCollection.findById(contactId);
  return contact;
};

export const createContact = async (payload) => {
  const newContact = new ContactsCollection(payload);
  const savedContact = await newContact.save();

  return savedContact;
};

export const updateContactById = async (contactId, updateData) => {
  return await ContactsCollection.findByIdAndUpdate(contactId, updateData, {
    new: true,
    runValidators: true,
  });
};

export const deleteContactById = async (contactId) => {
  const deleteContact = await ContactsCollection.findByIdAndDelete(contactId, {
    new: true,
  });
  return deleteContact;
};
