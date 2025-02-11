'use client';
import { useState } from 'react';
import Image from 'next/image';
import contactIllustration from '../../public/contact.svg';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    services: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);

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

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => {
      const updatedForm = { ...prev, [id]: value };
      validateForm(updatedForm);
      return updatedForm;
    });
  };

  const handleDropdownChange = (e) => {
    const selectedService = e.target.value;
    setFormData((prev) => {
      const updatedForm = { ...prev, services: selectedService };
      validateForm(updatedForm);
      return updatedForm;
    });
  };

  const validateForm = (updatedForm) => {
    const isAllFieldsFilled = Object.values(updatedForm).every(
      (value) => value.trim() !== ''
    );

    setIsFormValid(isAllFieldsFilled);
  };

  const [messageStatus, setMessageStatus] = useState({ type: '', text: '' });
  const [loadingResponse, setLoadingResponse] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessageStatus({ type: '', text: '' });
    setLoadingResponse(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: '', email: '', message: '', services: '' });
        setMessageStatus({
          type: 'success',
          text: 'Your response has been sent successfully! Our team will contact you shortly.',
        });
      } else {
        setMessageStatus({
          type: 'error',
          text: 'Something went wrong. Please try again later.',
        });
      }
    } catch (error) {
      setMessageStatus({
        type: 'error',
        text: 'Network issue! Please check your connection and try again.',
      });
    } finally {
      setLoadingResponse(false);
    }
  };

  return (
    <div className='container py-5 section-wrapper' id='contact'>
      <div className='row align-items-center'>
        <div
          className='text-center'
          data-aos='fade-up'
          data-aos-duration='2000'
        >
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
            data-aos='zoom-in'
            data-aos-duration='2000'
            src={contactIllustration}
            alt='Contact Illustration'
            className='img-fluid'
            style={{ position: 'relative', zIndex: 1 }}
            width={450}
            height={300}
            priority
          />
        </div>

        <div className='col-12 col-lg-6 p-5'>
          <div
            className='card shadow-sm border rounded-3'
            data-aos='zoom-in'
            data-aos-duration='2000'
          >
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
                          value={formData[field.id]}
                          onChange={handleChange}
                          required
                        />
                      ) : (
                        <input
                          id={field.id}
                          type={field.type}
                          className='form-control'
                          placeholder={field.placeholder}
                          value={formData[field.id]}
                          onChange={handleChange}
                          required
                        />
                      )}
                    </div>
                  ))}
                </div>

                <div className='row px-3'>
                  <div className='col-12 mb-3'>
                    <label
                      htmlFor='service'
                      className='form-label'
                      style={{ fontWeight: '600' }}
                    >
                      Select a Service
                    </label>
                    <select
                      id='services'
                      className='form-select'
                      value={formData.services}
                      onChange={handleDropdownChange}
                      required
                    >
                      <option value=''>Select an Option</option>
                      {options.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {loadingResponse && (
                  <div className='text-center mt-3'>
                    <div className='spinner-border text-primary' role='status'>
                      <span className='visually-hidden'>Processing...</span>
                    </div>
                    <p className='mt-2'>Processing your request...</p>
                  </div>
                )}

                {messageStatus.text && !loadingResponse && (
                  <div
                    className={`alert ${
                      messageStatus.type === 'success'
                        ? 'alert-success'
                        : 'alert-danger'
                    } text-center`}
                    role='alert'
                  >
                    {messageStatus.text}
                  </div>
                )}

                <div className='mt-3 px-3'>
                  <button
                    type='submit'
                    className='btn btn-primary w-100 border-0'
                    style={{ background: '#26ace3', color: '#fff' }}
                    disabled={!isFormValid}
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
