import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'flowbite-react';

const Dashboard = () => {
  return (
    // This will create two columns on medium screen sizes and above
    <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
      
      {/* -----------------------------1st Row - Accounts row ---------------------------------- */}

      <Card>
        <div className="flex flex-row items-start">
          {/* Image on the left */}
          <img
            src="https://i.pinimg.com/736x/2b/7c/cd/2b7ccd191c3440578bf383aef205e449.jpg"
            alt="Upload User"
            className="w-1/2 w-52 h-52 object-cover"
          />
          {/* Text details and button on the right */}
          <div className="flex flex-col justify-between p-4 leading-normal w-1/2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Manage User Accounts
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-4">
              Manage User Account Details Here!
            </p>
            <Link to="/admin/dashboard/manage-users">
              <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded'>
                Manage
              </button>
            </Link>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex flex-row items-start">
          {/* Image on the left */}
          <img
            src="https://i.pinimg.com/564x/8d/19/77/8d1977b1bfbebaf89077f5da7581c7f7.jpg"
            alt="Manage Admin"
            className="w-1/2 w-52 h-52 object-cover "
            
          />
          {/* Text details and button on the right */}
          <div className="flex flex-col justify-between p-4 leading-normal w-1/2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Manage Admin Accounts
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-4">
              Manage Admin Account Details Here!
            </p>
            <Link to="/admin/dashboard/manage-articles">
              <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded'>
                Manage
              </button>
            </Link>
          </div>
        </div>
      </Card>


      {/* -----------------------------2nd Row - Articles row ---------------------------------- */}
      <Card>
        <div className="flex flex-row items-start">
          {/* Image on the left */}
          <img
            src="https://i.pinimg.com/564x/de/dc/aa/dedcaaca10a80b0e265d889ae33c095b.jpg"
            alt="Upload Articles"
            className="w-1/2 w-52 h-52 object-cover"
          />
          {/* Text details and button on the right */}
          <div className="flex flex-col justify-between p-4 leading-normal w-1/2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Upload Articles
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-4">
              Upload Your Articles Here!
            </p>
            <Link to="/admin/dashboard/upload-articles">
              <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded'>
                Upload
              </button>
            </Link>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex flex-row items-start">
          {/* Image on the left */}
          <img
            src="https://i.pinimg.com/564x/f4/84/62/f484624b9719d2712a8039ff91e4054c.jpg"
            alt="Manage Articles"
            className="w-1/2 w-52 h-52 object-cover"
          />
          {/* Text details and button on the right */}
          <div className="flex flex-col justify-between p-4 leading-normal w-1/2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Manage Articles
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-4">
              Manage Your Articles Here!
            </p>
            <Link to="/admin/dashboard/manage-articles">
              <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded'>
                Manage
              </button>
            </Link>
          </div>
        </div>
      </Card>
      {/* ------------------------------------------------2.2nd Row - Upload Answer -----------------------------------------------------*/}
      <Card>
        <div className="flex flex-row items-start">
          {/* Image on the left */}
          <img
            src="https://i.pinimg.com/564x/17/f7/f4/17f7f439470509aedd35c08b3d92f0a1.jpg"
            alt="Manage User Questions"
            className="w-1/2 w-52 h-52 object-cover"
          />
          {/* Text details and button on the right */}
          <div className="flex flex-col justify-between p-4 leading-normal w-1/2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Manage User Questions
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-4">
              Manage User Asked Questions Here!
            </p>
            <Link to="/admin/dashboard/manage-question">
              <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded'>
                Manage
              </button>
            </Link>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex flex-row items-start">
          {/* Image on the left */}
          <img
            src="https://i.pinimg.com/564x/23/8b/59/238b5937aaeab403510d222b827e2277.jpg"
            alt="Manage Student Projects"
            className="w-1/2 w-52 h-52 object-cover"
          />
          {/* Text details and button on the right */}
          <div className="flex flex-col justify-between p-4 leading-normal w-1/2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Manage Student Projects
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-4">
              Manage Student Projects Here!
            </p>
            <Link to="/admin/dashboard/manage-studentprojects">
              <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded'>
                Manage
              </button>
            </Link>
          </div>
        </div>
      </Card>

      {/* -----------------------------3rd Row - Events row ---------------------------------- */}
      <Card>
        <div className="flex flex-row items-start">
          {/* Image on the left */}
          <img
            src="https://i.pinimg.com/564x/7c/10/f2/7c10f22e65623d455b8c218ba2866496.jpg"
            alt="Upload Events"
            className="w-1/2 w-52 h-52 object-cover"
          />
          {/* Text details and button on the right */}
          <div className="flex flex-col justify-between p-4 leading-normal w-1/2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Upload Events
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-4">
              Upload Your Event Details Here!
            </p>
            <Link to="/admin/dashboard/upload-events">
              <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded'>
                Upload
              </button>
            </Link>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex flex-row items-start">
          {/* Image on the left */}
          <img
            src="https://i.pinimg.com/564x/c9/e5/9f/c9e59f516c42aa0b5f1f6410233a8ca1.jpg"
            alt="Manage Events"
            className="w-1/2 w-52 h-52 object-cover"
          />
          {/* Text details and button on the right */}
          <div className="flex flex-col justify-between p-4 leading-normal w-1/2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Manage Events
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-4">
              Manage Your Event Details Here!
            </p>
            <Link to="/admin/dashboard/manage-event">
              <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded'>
                Manage
              </button>
            </Link>
          </div>
        </div>
      </Card>


      {/* -----------------------------4th Row - Community row ---------------------------------- */}
      <Card>
        <div className="flex flex-row items-start">
          {/* Image on the left */}
          <img
            src="https://i.pinimg.com/564x/0b/09/68/0b096841387a6827cb1b381652cd9958.jpg"
            alt="Upload Community"
            className="w-1/2 w-52 h-52 object-cover"
          />
          {/* Text details and button on the right */}
          <div className="flex flex-col justify-between p-4 leading-normal w-1/2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Upload Communities
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-4">
              Upload Your Community Details Here!
            </p>
            <Link to="/admin/dashboard/upload-community">
              <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded'>
                Upload
              </button>
            </Link>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex flex-row items-start">
          {/* Image on the left */}
          <img
            src="https://i.pinimg.com/564x/4a/41/64/4a4164b155694a0793947c2090bd0104.jpg"
            alt="Manage Community"
            className="w-1/2 w-52 h-52 object-cover"
          />
          {/* Text details and button on the right */}
          <div className="flex flex-col justify-between p-4 leading-normal w-1/2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Manage Communities
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-4">
              Manage Your Community Details Here!
            </p>
            <Link to="/admin/dashboard/manage-community">
              <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded'>
                Manage
              </button>
            </Link>
          </div>
        </div>
      </Card>


      {/* -----------------------------5th Row - Inventory row ---------------------------------- */}
      <Card>
        <div className="flex flex-row items-start">
          {/* Image on the left */}
          <img
            src="https://i.pinimg.com/564x/59/04/75/5904757edc923028dbd456dbd92add7a.jpg"
            alt="Upload Inventory"
            className="w-1/2 w-52 h-52 object-cover"
          />
          {/* Text details and button on the right */}
          <div className="flex flex-col justify-between p-4 leading-normal w-1/2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Upload Inventory Items
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-4">
              Upload Your Inventory Item Details Here!
            </p>
            <Link to="/admin/dashboard/upload-inventoryitem">
              <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded'>
                Upload
              </button>
            </Link>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex flex-row items-start">
          {/* Image on the left */}
          <img
            src="https://i.pinimg.com/564x/eb/3e/de/eb3ede49df000c0ce0f9d6e75c7c6312.jpg"
            alt="Manage Inventory"
            className="w-1/2 w-52 h-52 object-cover"
          />
          {/* Text details and button on the right */}
          <div className="flex flex-col justify-between p-4 leading-normal w-1/2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Manage Inventory Items
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-4">
              Manage Your Inventory Item Details Here!
            </p>
            <Link to="/admin/dashboard/manage-inventoryitems">
              <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded'>
                Manage
              </button>
            </Link>
          </div>
        </div>
      </Card>


      {/* -----------------------------6th Row - Green Jobs row ---------------------------------- */}
      <Card>
        <div className="flex flex-row items-start">
          {/* Image on the left */}
          <img
            src="https://i.pinimg.com/564x/46/43/fe/4643fe7033ea71999717eb08df120dfc.jpg"
            alt="Upload Green Jobs"
            className="w-1/2 w-52 h-52 object-cover"
          />
          {/* Text details and button on the right */}
          <div className="flex flex-col justify-between p-4 leading-normal w-1/2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Upload New GreenJobs
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-4">
              Upload Your Green Jobs Details Here!
            </p>
            <Link to="/admin/dashboard/upload-articles">
              <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded'>
                Upload
              </button>
            </Link>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex flex-row items-start">
          {/* Image on the left */}
          <img
            src="https://i.pinimg.com/564x/92/61/0c/92610c959d3aa92bb47a485586d55ec6.jpg"
            alt="Manage GreenJobs"
            className="w-1/2 w-52 h-52 object-cover"
          />
          {/* Text details and button on the right */}
          <div className="flex flex-col justify-between p-4 leading-normal w-1/2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Manage Green Jobs
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-4">
              Manage Your Green Jobs Details Here!
            </p>
            <Link to="/admin/dashboard/manage-articles">
              <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded'>
                Manage
              </button>
            </Link>
          </div>
        </div>
      </Card>


      {/* -----------------------------7th Row - Weatherhub row ---------------------------------- */}
      <Card>
        <div className="flex flex-row items-start">
          {/* Image on the left */}
          <img
            src="https://i.pinimg.com/564x/1d/c4/77/1dc477fd80f1f9b8a01880287fe34a2c.jpg"
            alt="Upload Weathe stats"
            className="w-1/2 w-52 h-52 object-cover"
          />
          {/* Text details and button on the right */}
          <div className="flex flex-col justify-between p-4 leading-normal w-1/2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Upload Weather Stats
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-4">
              Upload Your Weather Stat Details Here!
            </p>
            <Link to="/admin/dashboard/upload-articles">
              <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded'>
                Upload
              </button>
            </Link>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex flex-row items-start">
          {/* Image on the left */}
          <img
            src="https://i.pinimg.com/564x/68/34/ef/6834efcf4cdcfb77d31b7f436cc7cc4c.jpg"
            alt="Manage Weather stats"
            className="w-1/2 w-52 h-52 object-cover"
          />
          {/* Text details and button on the right */}
          <div className="flex flex-col justify-between p-4 leading-normal w-1/2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Manage Weather Stats
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-4">
              Manage Your Weather Stat Details Here!
            </p>
            <Link to="/admin/dashboard/manage-articles">
              <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded'>
                Manage
              </button>
            </Link>
          </div>
        </div>
      </Card>


      {/* -----------------------------8th Row ---Delivery row ---------------------------------- */}
      <Card>
        <div className="flex flex-row items-start">
          {/* Image on the left */}
          <img
            src="https://i.pinimg.com/564x/f3/42/41/f34241ee597ce4fe968fcafe76205e01.jpg"
            alt="Upload Delivery Driver Details"
            className="w-1/2 w-52 h-52 object-cover"
          />
          {/* Text details and button on the right */}
          <div className="flex flex-col justify-between p-4 leading-normal w-1/2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Upload Delivery Driver Details
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-4">
              Upload Delivery Driver Details Here!
            </p>
            <Link to="/admin/dashboard/upload-driver">
              <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded'>
                Upload
              </button>
            </Link>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex flex-row items-start">
          {/* Image on the left */}
          <img
            src="https://i.pinimg.com/564x/11/2a/e7/112ae7cc7a201852b16a93e2e46a9d27.jpg"
            alt="Manage Delivery Driver Details"
            className="w-1/2 w-52 h-52 object-cover"
          />
          {/* Text details and button on the right */}
          <div className="flex flex-col justify-between p-4 leading-normal w-1/2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Manage Delivery Driver Details
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-4">
              Manage Driver Profile Details Here!
            </p>
            <Link to="/admin/dashboard/manage-deliverydrivers">
              <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded'>
                Manage
              </button>
            </Link>
          </div>
        </div>
      </Card>


      {/* -----------------------------9th Row --Customer Review and Care row ---------------------------------- */}
      <Card>
        <div className="flex flex-row items-start">
          {/* Image on the left */}
          <img
            src="https://i.pinimg.com/564x/cd/e8/be/cde8be377dc8e7c91f8b818047dd6ed7.jpg"
            alt="Upload Delivery Driver Details"
            className="w-1/2 w-52 h-52 object-cover"
          />
          {/* Text details and button on the right */}
          <div className="flex flex-col justify-between p-4 leading-normal w-1/2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Manage Customer Reviews
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-4">
              Manage Customer Review Details Here!
            </p>
            <Link to="/admin/dashboard/manage-reviews">
              <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded'>
                Manage
              </button>
            </Link>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex flex-row items-start">
          {/* Image on the left */}
          <img
            src="https://i.pinimg.com/564x/15/51/bc/1551bc99b39ac47bd3445fbcf4cd11da.jpg"
            alt="Manage Delivery Driver Details"
            className="w-1/2 w-52 h-52 object-cover"
          />
          {/* Text details and button on the right */}
          <div className="flex flex-col justify-between p-4 leading-normal w-1/2">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Manage Customer Care
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mb-4">
              Manage Customer Care Details Here!
            </p>
            <Link to="/admin/dashboard/manage-contactusforms">
              <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded'>
                Manage
              </button>
            </Link>
          </div>
        </div>
      </Card>



    </div>
  );
}

export default Dashboard;
