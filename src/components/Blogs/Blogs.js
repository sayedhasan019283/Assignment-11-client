import React from 'react';

const Blogs = () => {
    return (
        <div className='container '>
            <div className='d-flex justify-content-center align-items-center mt-5'>
                <div>
                    <div>
                        <h1>Difference between javascript and nodejs?</h1>
                        <p><b>Ans: Javascript is a programming language that runs in browser JavaScript Engine.Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. Whereas node js is a runtime environment that allows the javascript to be run on the server-side.</b>  </p>
                    </div>
                    <div >
                        <h1>Differences between sql and nosql databases?</h1>
                        <p> <b> Ans:SQL is RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).These databases have fixed or static or predefined schema.SQL databases are vertically scalable. whereas  NOSQL is Non-relational or distributed database system.They have dynamic schema.while NoSQL databases are horizontally scalable.SQL databases are table-based, while NoSQL databases are document</b></p>
                    </div>
                    <div>
                        <h1> What is the purpose of jwt and how does it work?</h1>
                        <p><b>Ans: JWT stands for json web token. it basically used for securing server side api so that only authorized person can access the data.NO one can access without authorization. There are two types of token like refresh token and access token. that can be expried.Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</b></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;