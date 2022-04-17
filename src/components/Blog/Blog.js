import React from 'react';

import '../CommonStyles/CommonStyles.css';

const Blog = () => {
    
    return (
        <section className='container blog'>
            <div>
                <h3 className='mt-5'>Difference between authorization and authentication</h3>
                <p className='mt-3'>Authentication and authorization in firebase are relatable things. Authentication is when you want to know about a user if he is real or his provided information are real while authorization means to allow the user to do new things or make changes. </p>

            </div>
            <div>
                <h3 className='mt-5'>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p className='mt-3'>Firebase is now a popular name among the developers. Firebase provides many features for app, web or game developers. Especially they provide secure and protected authentication that is very helpful for coders. As a web developer we better use firebase for authentication otherwise we have to create our own authentication method which will not be as secure as firebase provided one. There are some other options like mongoDB, Okta and some more but they are not as popular or easy like firebase. 
</p>

            </div>
            <div>
                <h3 className='mt-5'>What other services does firebase provide other than authentication?</h3>
                <p className='mt-3'>There are many useful features that are offered by firebase such as hosting, storage, analytics, cloud messaging, dynamic link and many more.</p>

            </div>
        </section>
    );
};

export default Blog;