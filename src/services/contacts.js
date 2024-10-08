import { ContactsCollection } from '../db/models/contacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await ContactsCollection.find();
    return contacts;
  } catch (error) {
    console.log('get all contacts error: ', error);
  }
};

export const getContactById = async (contactId) => {
  try {
    const contact = await ContactsCollection.findById(contactId);
    return contact;
  } catch (error) {
    console.log('get contact by id: ', error);
  }
};

export const createContact = async ({
  name,
  phoneNumber,
  email,
  isFavourite,
  contactType,
}) => {
  const newContact = new ContactsCollection({
    name,
    phoneNumber,
    email: email || null,
    isFavourite: isFavourite || false,
    contactType,
  });
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
  const deleteContact = await ContactsCollection.findByIdAndDelete(contactId);
  return deleteContact;
};
