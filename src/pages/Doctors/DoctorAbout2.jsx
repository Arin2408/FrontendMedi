import { formateDate } from "../../utils/formateDate";

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semiBold flex items-center gap-2">
          About
          <span className="text-irisBlueColor font-bold text-[24px] leadinng-9 ">
            Usha Sharma
          </span>
        </h3>
        <p className="text__para">
          She is currently practising as a surgeon at Manipal Hospitals,
          Vijayawada. She is specilized in knee and other joints surgery. She is
          awarded by Andhra Pradesh government for her excellence in the field
          of surgery. In 2014, she was named a Top Doctor among the Southern
          India areas by The Observers Readers Choice Awards. She also received
          Compassionate Doctor Recognition for four consecutive years and the
          Patients Choice Award for seven years. In addition to her surgical
          practice, she is on the board of Vision Health International, an
          organization providing eye care and surgery to indigent patients in
          India.
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font_semibold">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("08-24-2010")} - {formateDate("08-24-2012")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hostpital, Indore.
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formateDate("12-04-2014")} - {formateDate("12-04-2016")}
              </span>
              <p className="text-[15px] leading-6 font-medium text-textColor">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hostpital, Mumbai.
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font_semibold">
          Experience
        </h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4  md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
              {formateDate("12-04-2014")} - {formateDate("12-04-2016")}
            </span>
            <p className="text-[15px] leading-6 font-medium text-textColor">
              Sr. Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hostpital, New York.
            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
              {formateDate("12-04-2014")} - {formateDate("12-04-2016")}
            </span>
            <p className="text-[15px] leading-6 font-medium text-textColor">
              Sr. Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              New Apollo Hostpital, New Delhi.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
