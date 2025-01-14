import Input from "./input";
import img from './../../assets/images/contact.jpg'

const contact = () => {
  const Label = [
    {
      labelName: "Name",
      type: "text",
    },
    { labelName: "Email Address", text: "email" },
    { labelName: "Message", text: "text" },
  ];
  return (
    <>
      <div className="w-full h-fit px-2 md:px-[50px] py-10">
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2">
          <form data-aos="fade-right" className="w-full h-full px-2 md:px-10 py-5">
            <h1 className="text-4xl font-semibold font-['poppins'] mb-2">
              Contact Us
            </h1>
            <h1 className="text-md pr-10 mb-2 font-['poppins']">
              We'd love to hear from you! Whether you have a question, need
              support, or want to give us feedback.
            </h1>
            {Label.map(({ labelName, type }, index) => (
              <Input key={index} labelName={labelName} type={type} />
            ))}
            <button className="w-fit h-[30px] bg-[rgb(71,51,38)] px-10 font-['poppins'] rounded-sm font-bold text-white text-md">
              Submit
            </button>
          </form>
          <div data-aos="fade-left">
            <img
              src={img}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
