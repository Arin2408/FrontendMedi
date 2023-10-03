

const SlidePanel = () => {
  return (
    <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
        <div className='flex items-center justify-between'>
            <p className='text__para mt-0 font-semibold'>Fees:</p>
            <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold'>
                Rs. 500
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
                        9:30 AM - 4:00 PM
                    </p>
                </li>
                <li className='flex items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        Tuesday
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        9:30 AM - 4:00 PM
                    </p>
                </li>
                <li className='flex items-center justify-between mb-2'>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        Friday
                    </p>
                    <p className='text-[15px] leading-6 text-textColor font-semibold'>
                        9:30 AM - 4:00 PM
                    </p>
                </li>
            </ul>
        </div>
        <br />
        <p className="text-xs text-center">Our bot will help you</p>
        <a className="flex justify-center text-white bg-primaryColor font-medium rounded-md py-2" target="_blank" href="https://mediafiles.botpress.cloud/f08aa14c-8f1f-4ff2-af63-3770c2ce6b47/webchat/bot.html">Book an Appointment</a>
    </div>
  )
}

export default SlidePanel
