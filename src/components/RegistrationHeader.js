import logo from "../assets/logo.png";

export default function RegistrationHeader() {
  return (
    <div className="bg-white flex items-center justify-center w-100 h-1/8 py-4">
      <img src={logo} alt="{logo}" width="64" height="32" />
      <div className="font-bold text-theme-color text-center">Concierge Service</div>
    </div>
  );
}
