'use client';
import { useState } from 'react';
import Image from 'next/image';
import contactIllustration from '../../public/contact.svg';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  console.log(formData);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch('/api/contact', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       console.log('Request sent');
  //     } else {
  //       console.log('Error');
  //     }
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log('Request sent');
      } else {
        const errorData = await response.json();
        console.log('Error:', errorData.error);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const formFields = [
    {
      id: 'name',
      label: 'Your Name',
      type: 'text',
      placeholder: 'Name',
    },
    {
      id: 'email',
      label: 'Your Email',
      type: 'email',
      placeholder: 'Email',
    },
    {
      id: 'message',
      label: 'Message',
      type: 'textarea',
      placeholder: `Tell us what's on your mind...`,
      rows: 4,
      colSize: 12,
    },
  ];

  const options = [
    'React Website',
    'WordPress',
    'Custom Design',
    'UI UX',
    'SEO',
    'Other',
  ];

  return (
    <div className='container py-5 section-wrapper' id='contact'>
      <div className='row align-items-center'>
        <div className='text-center'>
          <h1 className='mb-3 fs-2' style={{ fontWeight: '600' }}>
            Get In Touch!
          </h1>
          <p>
            we are eager to connect with you, understand your unique needs, and
            collaborate to enhance your technological solutions.
          </p>
        </div>
        <div className='col-12 col-lg-6 mb-4 mb-lg-0 text-center'>
          <Image
            src={contactIllustration}
            alt='Contact Illustration'
            className='img-fluid fade-in-left'
            width={450}
            height={300}
            priority
          />
        </div>

        <div className='col-12 col-lg-6 p-5'>
          <div className='card shadow-sm border rounded-3 fade-in-right'>
            <div className='card-body'>
              <form onSubmit={handleSubmit} noValidate>
                <div className='row p-3'>
                  {formFields.map((field) => (
                    <div
                      key={field.id}
                      className={`col-12 col-md-${field.colSize || 6} mb-3`}
                    >
                      <label
                        htmlFor={field.id}
                        className='form-label'
                        style={{ fontWeight: '600' }}
                      >
                        {field.label}
                      </label>
                      {field.type === 'textarea' ? (
                        <textarea
                          id={field.id}
                          className='form-control'
                          placeholder={field.placeholder}
                          rows={field.rows || 4}
                        />
                      ) : (
                        <input
                          id={field.id}
                          type={field.type}
                          className='form-control'
                          placeholder={field.placeholder}
                          value={formData.id}
                          onChange={handleChange}
                          required
                        />
                      )}
                    </div>
                  ))}
                </div>

                <div className='row px-4'>
                  {options.map((option, index) => (
                    <div className='col-6 mb-2' key={index}>
                      <div className='form-check'>
                        <input
                          className='form-check-input'
                          type='checkbox'
                          id={`option-${index}`}
                        />
                        <label
                          className='form-check-label ms-2'
                          style={{ fontWeight: '600' }}
                          htmlFor={`option-${index}`}
                        >
                          {option}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>

                <div className='mt-4 px-3'>
                  <button
                    type='submit'
                    className='btn btn-primary w-100 border-0'
                    style={{ background: '#26ace3', color: '#fff' }}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
