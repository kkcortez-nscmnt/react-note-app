import { useState } from 'react';
import TextInput from './inputs/TextInput';
import SelectInput from './inputs/SelectInput';
import TextAreaInput from './inputs/TextAreaInput';

const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Work',
    priority: 'Medium',
    description: '',
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submited', formData);
    if (!formData.title || !formData.description) return;

    // crate note object
    const newNote = {
      id: Date.now(),
      ...formData,
    };
    // add note to sate
    setNotes([newNote, ...notes]);

    // reset form data
    setFormData({
      title: '',
      category: 'Work',
      priority: 'Medium',
      description: '',
    });
  };

  return (
    <>
      <button
      onClick={() => setIsFormVisible(!isFormVisible)} 
      className="mb-4 w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-100 py-2 text-purple-800 transition hover:border-purple-300 hover:bg-purple-200">
        {isFormVisible ? 'Hide form' : 'Add New Note'}
      </button>
      { isFormVisible && (
        <form onSubmit={handleSubmit} className="mb-6">
        <TextInput 
        label='Title'
        id='title'
        value={formData.title}
        onChange={handleChange}
        required
        />
        <SelectInput
        label='Priority'
        id='priority'
        value={formData.priority}
        onChange={handleChange}
        options={[
          {value: 'High', label: 'High'},
          {value: 'Medium', label: 'Medium'},
          {value: 'Low', label: 'Low'},
        ]}
        />
        <SelectInput
        label='Category'
        id='category'
        value={formData.category}
        onChange={handleChange}
        options={[
          {value: 'Work', label: 'Work'},
          {value: 'Personal', label: 'Personal'},
          {value: 'Ideas', label: 'Ideas'},
        ]}
        />
        <TextAreaInput
        label='Description'
        id='description'
        value={formData.description}
        onChange={handleChange}
        />

        <button className="hover: w-full cursor-pointer rounded-lg bg-purple-500 bg-purple-600 py-2 text-white">
          Add Note
        </button>
      </form>
      )}
    </>
  );
};

export default NoteForm;
