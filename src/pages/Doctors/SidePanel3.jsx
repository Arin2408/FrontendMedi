

const SlidePanel = () => {
    return (
      <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
          <div className='flex items-center justify-between'>
              <p className='text__para mt-0 font-semibold'>Fees:</p>
              <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold'>
                  Rs. 400
              </span>
          </div>
          <div className='mt-[30px]'>
              <p className='text__para mt-0 font-semibold text-headingColor'>
                  Available Time Slots:
              </p>
              <ul className='mt-3'>
                  <li className='flex items-center justify-between mb-2'>
                      <p className='text-[15px] leading-6 text-textColor font-semibold'>
                          Sunday
                      </p>
                      <p className='text-[15px] leading-6 text-textColor font-semibold'>
                          9:00 AM - 12:00 PM
                      </p>
                  </li>
                  <li className='flex items-center justify-between mb-2'>
                      <p className='text-[15px] leading-6 text-textColor font-semibold'>
                          Wednesday
                      </p>
                      <p className='text-[15px] leading-6 text-textColor font-semibold'>
                          9:30 AM - 2:30 PM
                      </p>
                  </li>
                  <li className='flex items-center justify-between mb-2'>
                      <p className='text-[15px] leading-6 text-textColor font-semibold'>
                          Friday
                      </p>
                      <p className='text-[15px] leading-6 text-textColor font-semibold'>
                          11:30 AM - 6:00 PM
                      </p>
                  </li>
              </ul>
          </div>
          <br />
          <p className="text-xs text-center">Our bot will help you</p>
          <a className="flex justify-center text-white bg-primaryColor font-medium rounded-md py-2" target="_blank" href="https://mediafiles.botpress.cloud/82f86ee9-fd3c-4247-9574-96c9559794e1/webchat/bot.html">Book an Appointment</a>
      </div>
    )
  }
  
  export default SlidePanel
  