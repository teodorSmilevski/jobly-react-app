/* eslint-disable react/prop-types */
export default function Card({ children, bg }) {
  return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
}
