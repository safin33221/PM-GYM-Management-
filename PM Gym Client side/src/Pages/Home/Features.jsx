import { FaCalendarAlt, FaChartLine, FaClipboardList, FaCreditCard, FaDumbbell, FaMobileAlt, FaUserTie, FaUtensils } from "react-icons/fa";
import SectionTitle from "../../Components/SectionTitle";


const features = [
    { icon: <FaDumbbell />, title: "Membership Management", desc: "Track and manage memberships easily." },
    { icon: <FaCalendarAlt />, title: "Class Scheduling", desc: "Book and manage fitness classes online." },
    { icon: <FaUserTie />, title: "Trainer Profiles", desc: "Connect with expert trainers for guidance." },
    { icon: <FaClipboardList />, title: "Workout Plans", desc: "Get personalized workout recommendations." },
    { icon: <FaUtensils />, title: "Diet & Nutrition", desc: "Access diet plans for a balanced lifestyle." },
    { icon: <FaChartLine />, title: "Progress Tracking", desc: "Monitor your fitness journey with reports." },
    { icon: <FaCreditCard />, title: "Payment & Billing", desc: "Secure online payments and renewals." },
    { icon: <FaMobileAlt />, title: "Mobile Access", desc: "Access features seamlessly on mobile." }
];

const Features = () => {
    return (
        <section className="py-12 bg-gray-100">
            <div className=" mx-auto px-16">
                <SectionTitle title='🔥 Key Features' subTitle="Transform Your Fitness Journey with Powerful Features!"/>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl hover:border duration-100 transtion-all ease-in-out">
                            <div className="text-4xl  mb-4 flex justify-center">{feature.icon}</div>
                            <h3 className="text-lg font-semibold">{feature.title}</h3>
                            <p className="text-gray-600 mt-2">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;