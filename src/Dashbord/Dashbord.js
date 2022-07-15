import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const Dashbord = () => {
    return (
        <div>
            <div class="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content ">
                    <h2 className='text-2xl font-bold text-primary'>Welcome to Your Dashboard</h2>
                    <Outlet></Outlet>

                </div>
                <div class="drawer-side">
                    <label for="my-drawer-2" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><a>My Order</a></li>
                        <li><a>My Review</a></li>
                        <li><a>My Profile</a></li>
                        {/* <li><Link to='/dashbord'>My Dashboard</Link></li>
                        <li><Link to='/dashbord/myorder'>My Dashbord</Link></li>
                        <li><Link to='/dashbord/myreview'>My Review</Link></li>
                        <li><Link to='/dashbord/myprofile'>My History</Link></li> */}

                    </ul>

                </div>
            </div>
        </div >
    );
};

export default Dashbord;