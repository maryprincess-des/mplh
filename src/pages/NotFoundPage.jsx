import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
      <div>
        <div className="py-16 px-4 mx-auto max-w-screen-xl lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-iron-smoke">404</h1>
                <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Something's missing.</p>
                <p className="mb-4 text-lg font-light text-gray-500">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                <Link to={'/'}>
                  <button
                    className="inline-flex text-iron-smoke focus:ring-4 font-medium text-md px-5 py-2.5 text-center my-4 hover:cursor-pointer"
                  >Back to Homepage</button>
                </Link>
            </div>   
        </div>
    </div>
  );
};

export default NotFoundPage;