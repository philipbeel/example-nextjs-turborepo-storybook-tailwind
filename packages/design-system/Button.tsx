export interface ButtonProps {
  label: any;
}

export const Button = ({ label }: ButtonProps) => {
  return (
    <button
      type="button"
      className="inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      {label}
    </button>
  );
};
