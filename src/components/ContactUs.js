import Image from 'next/image';
// import styles from './Contact.module.css';
import contactIllustration from '../../public/contact.svg';

function ContactUs() {
  // Form fields data
  const formFields = [
    {
      id: 'name',
      label: 'Your Name',
      type: 'text',
      placeholder: 'Enter your name',
    },
    {
      id: 'email',
      label: 'Your Email',
      type: 'email',
      placeholder: 'Enter your email',
    },
    {
      id: 'message',
      label: 'Message',
      type: 'textarea',
      placeholder: 'Enter your message',
      rows: 4,
      colSize: 12,
    },
  ];

  // Options for checkboxes
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
        {/* Illustration Section */}
        <div className='col-12 col-lg-6 mb-4 mb-lg-0 text-center'>
          <Image
            src={contactIllustration}
            alt='Contact Illustration'
            className='img-fluid illustration'
            width={450}
            height={300}
            priority
          />
        </div>

        {/* Form Section */}
        <div className='col-12 col-lg-6'>
          <div className='card shadow-sm border rounded-3'>
            <div className='card-body'>
              <h3 className='mb-4 text-primary'>Contact Us</h3>
              <form noValidate>
                <div className='row'>
                  {/* Render form fields */}
                  {formFields.map((field) => (
                    <div
                      key={field.id}
                      className={`col-12 col-md-${field.colSize || 6} mb-3`}
                    >
                      <label htmlFor={field.id} className='form-label'>
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
                        />
                      )}
                    </div>
                  ))}
                </div>

                {/* Checkbox Options */}
                <div className='row'>
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
                          htmlFor={`option-${index}`}
                        >
                          {option}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Submit Button */}
                <div className='mt-4'>
                  <button
                    type='submit'
                    className='btn btn-primary w-100'
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
