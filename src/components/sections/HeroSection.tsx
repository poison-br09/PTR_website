import { useState } from 'react';
// import google_logo from '../../assets/google.svg';

const SERVICES_LIST = [
    "Private Limited Company Registration",
    "One Person Company Registration (OPC)",
    "LLP Registration",
    "Partnership Firm Registration",
    "Sole Proprietorship Registration",
    "Startup India Registration",
    "Virtual Office",
    "Compliance",
    "Trademark Registration",
    "Copyright Registration",
    "GST Registration",
    "Section 8 Company Registration",
    "GST Return Filing",
    "FSSAI Registration",
    "BIS Registration",
    "NGO Registration",
    "Need A Job",
    "Need help with Other Services"
];

const COUNTRY_CODES = [
    "+91",
    "+1",
    "+44"
];

export default function HeroSection() {
    const [phoneError, setPhoneError] = useState('');
    const [emailError, setEmailError] = useState('');

    // Form States
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phoneCode: '+91',
        phone: '',
        email: '',
        service: ''
    });

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        if (/[^0-9]/.test(val)) {
            setPhoneError('Please enter numbers only.');
        } else {
            setPhoneError('');
        }
        e.target.value = val.replace(/[^0-9]/g, '');
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        // Basic email regex for real-time typing feedback
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (val.length > 0 && !emailRegex.test(val)) {
            setEmailError('Please enter a valid email address.');
        } else {
            setEmailError('');
        }
        setFormData({ ...formData, email: val });
    };

    const handleFormSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        // Basic validation check before submit
        if (phoneError || emailError || !formData.name || !formData.phone || !formData.email || !formData.service) {
            alert('Please fill all fields correctly before submitting.');
            return;
        }

        setIsSubmitting(true);
        try {
            const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

            const formBody = new URLSearchParams();
            formBody.append("Name", formData.name);
            formBody.append("Phone", `${formData.phoneCode} ${formData.phone}`);
            formBody.append("Email", formData.email);
            formBody.append("Service", formData.service);

            // Append parameters directly to the URL to bypass no-cors POST body stripping 
            await fetch(`${GOOGLE_SCRIPT_URL}?${formBody.toString()}`, {
                method: "POST",
                mode: "no-cors"
            });

            // Success handling
            setSubmitSuccess(true);

            // Reset form
            setFormData({
                name: "",
                phoneCode: "+91",
                phone: "",
                email: "",
                service: ""
            });

            // Hide success message after 5 seconds
            setTimeout(() => setSubmitSuccess(false), 5000);

        } catch (error) {
            console.error("Submission failed:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="bg-[#090a3d] pt-32 lg:pt-40 pb-16 lg:pb-24 px-4 md:px-8 relative overflow-hidden text-white flex flex-col items-center">
            {/* Decorative Glowing Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-[var(--color-brand-secondary)] opacity-10 blur-[120px] rounded-full z-0"></div>

            <div className="container mx-auto flex flex-col items-center relative z-10 text-center max-w-6xl">

                {/* Headlines */}
                <h1 className="text-4xl md:text-5xl lg:text-[64px] font-extrabold text-white leading-tight mb-6">
                    Get your business incorporated in just 5 days
                </h1>

                <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-8">
                    Get fast, reliable, and customizable online business solutions & legal services with free consultation with experts.
                </p>

                {/* The Glowing Consultation Form */}
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 md:p-8 w-full max-w-4xl shadow-[0_0_60px_rgba(199,145,0,0.2)] md:shadow-[0_0_100px_rgba(199,145,0,0.3)] border border-gray-400 relative z-20">
                    {submitSuccess && (
                        <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded text-sm font-semibold text-center">
                            Thank you! Your information has been submitted successfully.
                        </div>
                    )}
                    <form className="flex flex-col gap-4" onSubmit={handleFormSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Name Input */}
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                                className="w-full bg-white border border-gray-400 rounded-lg px-4 py-3 text-black placeholder-black focus:outline-none focus:border-[var(--color-brand-secondary)] focus:ring-1 focus:ring-[var(--color-brand-secondary)]"
                            />

                            {/* Phone Input with Country Code */}
                            <div>
                                <div className={`flex rounded-lg border bg-white overflow-hidden focus-within:ring-1 ${phoneError ? 'border-red-500 focus-within:border-red-500 focus-within:ring-red-500' : 'border-gray-400 focus-within:border-[var(--color-brand-secondary)] focus-within:ring-[var(--color-brand-secondary)]'}`}>
                                    <select
                                        className={`bg-gray-100 border-r px-3 py-3 text-black focus:outline-none cursor-pointer ${phoneError ? 'border-red-500' : 'border-gray-400'}`}
                                        value={formData.phoneCode}
                                        onChange={(e) => setFormData({ ...formData, phoneCode: e.target.value })}
                                    >
                                        {COUNTRY_CODES.map((code) => (
                                            <option key={code} value={code}>
                                                {code}
                                            </option>
                                        ))}
                                    </select>
                                    <input
                                        type="tel"
                                        placeholder="Enter your PhoneNo."
                                        className="w-full bg-transparent px-4 py-3 text-black placeholder-black focus:outline-none"
                                        maxLength={10}
                                        value={formData.phone}
                                        onChange={(e) => {
                                            handlePhoneChange(e);
                                            setFormData({ ...formData, phone: e.target.value.replace(/[^0-9]/g, '') });
                                        }}
                                        required
                                    />
                                </div>
                                {phoneError && <p className="text-red-500 text-xs mt-1 absolute">{phoneError}</p>}
                            </div>

                            {/* Email Input */}
                            <div>
                                <input
                                    type="email"
                                    placeholder="Enter your Email"
                                    value={formData.email}
                                    className={`w-full bg-white border rounded-lg px-4 py-3 text-black placeholder-black focus:outline-none focus:ring-1 ${emailError ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-400 focus:border-[var(--color-brand-secondary)] focus:ring-[var(--color-brand-secondary)]'}`}
                                    onChange={handleEmailChange}
                                    required
                                />
                                {emailError && <p className="text-red-500 text-xs mt-1 absolute">{emailError}</p>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Service Selection */}
                            <div className="relative">
                                <select
                                    className="w-full bg-white border border-gray-400 rounded-lg px-4 py-3 text-black appearance-none focus:outline-none focus:border-[var(--color-brand-secondary)] focus:ring-1 focus:ring-[var(--color-brand-secondary)] cursor-pointer"
                                    value={formData.service}
                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                    required
                                >
                                    <option value="" disabled>Select your service</option>
                                    {SERVICES_LIST.map((serviceName) => (
                                        <option key={serviceName} value={serviceName}>
                                            {serviceName}
                                        </option>
                                    ))}
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full bg-[var(--color-brand-secondary)] hover:bg-[#a17500] text-white font-bold rounded-lg px-4 py-3 transition-colors uppercase tracking-wide text-sm shadow-md ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                            >
                                {isSubmitting ? 'Submitting...' : 'Claim Your Free Consultation'}
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </section>
    );
}
