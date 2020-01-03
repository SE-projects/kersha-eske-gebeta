const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { validate } = require('../models/validateUser.js');

//Load schema
require('../models/User');
const user = mongoose.model('user');
require('../models/Manages');
const manages = mongoose.model('Manages');


//Register from Post
//handle the customer and merchant registration
router.post('/signup', (req, res) => {
    const userVal_Data = {
        fullName: req.body.fullName,
        password: req.body.password,
        email: req.body.Email,
        location: req.body.location,
        phoneNumber: req.body.phoneNumber
    }
    const { error } = validate(userVal_Data);
    if (error) {
        res.render('HomePages/login', {
            signupError: error.details[0].message,
            fullName: req.body.fullName,
            email: req.body.Email,
            phoneNumber: req.body.phoneNumber,
            location: req.body.location
        });
    } else {
        if (req.body.password != req.body.password2) {
            res.render('HomePages/login', {
                signupError: "Password Need to be the same",
                fullName: req.body.fullName,
                email: req.body.Email,
                phoneNumber: req.body.phoneNumber,
                location: req.body.location
            });
        } else {
            //check that the user is found in the database
            user.findOne({ email: req.body.Email })
                .then(users => {
                    if (users) {
                        res.render('HomePages/login', {
                            signupError: "Email Address already in use",
                            fullName: req.body.fullName,
                            email: req.body.Email,
                            phoneNumber: req.body.phoneNumber,
                            location: req.body.location
                        });
                    } else {
                        //bcrypt the password and save user
                        let userType = 'customer';
                        if ('on' == req.body.merchantCheckBox) {
                            userType = 'merchant'
                        }
                        let newUser = new user({
                            fullName: req.body.fullName,
                            email: req.body.Email,
                            phoneNumber: req.body.phoneNumber,
                            password: req.body.password,
                            location: req.body.location,
                            userType: userType,
                        });
                        bcrypt.genSalt(10, (err, salt) => {
                            bcrypt.hash(newUser.password, salt, (err, hash) => {
                                if (err) throw err
                                newUser.password = hash;
                                newUser.save()
                                    .then(user => {
                                        res.render('HomePages/login', {
                                            success: 'Login to continue.'
                                        })
                                    })
                                    .catch(err => {
                                        res.render('HomePages/login', {
                                            signupError: "Please review your form",
                                            fullName: req.body.fullName,
                                            email: req.body.Email,
                                            phoneNumber: req.body.phoneNumber,
                                            location: req.body.location
                                        });
                                    })
                            })
                        })
                    }
                })
        }
    }

});

//handle the central storage manager registering 
router.post('/csm/createAccount', (req, res) => {
    let managingId, managedId;
    const userVal_Data = {
        fullName: req.body.fullName,
        password: req.body.password,
        email: req.body.Email,
        location: req.body.location,
        phoneNumber: req.body.phoneNumber
    }
    const { error } = validate(userVal_Data);
    if (error) {
        res.render('CentralSM/registor', {
            signupError: error.details[0].message,
            fullName: req.body.fullName,
            email: req.body.Email,
            phoneNumber: req.body.phoneNumber,
            location: req.body.location
        });
    } else {
        if (req.body.password != req.body.confirmPassword) {
            res.render('CentralSM/registor', {
                signupError: "Password Need to be the same",
                fullName: req.body.fullName,
                email: req.body.Email,
                phoneNumber: req.body.phoneNumber,
                location: req.body.location
            });
        } else {
            //check that the user is found in the database
            user.findOne({ email: req.body.Email })
                .then(users => {
                    if (users) {
                        res.render('CentralSM/registor', {
                            signupError: "Email Address already in use",
                            fullName: req.body.fullName,
                            email: req.body.Email,
                            phoneNumber: req.body.phoneNumber,
                            location: req.body.location
                        });
                    } else {
                        //bcrypt the password and save user
                        let register = true;
                        let userType = 'ssm';
                        if (req.body.radio == 'Purchaser') {
                            userType = 'purchaser'
                        } else if (req.body.radio == 'LogisticDepartment') {
                            userType = 'logistic'
                        } else if (req.body.radio == 'ShopManager') {
                            userType = 'ssm'
                        } else {
                            register = false;
                            res.render('CentralSM/registor', {
                                signupError: "Select the user Type",
                                fullName: req.body.fullName,
                                email: req.body.Email,
                                phoneNumber: req.body.phoneNumber,
                                location: req.body.location
                            });
                        }
                        if (register) {
                            let newUser = new user({
                                fullName: req.body.fullName,
                                email: req.body.Email,
                                phoneNumber: req.body.phoneNumber,
                                password: req.body.password,
                                location: req.body.location,
                                userType: userType,
                                branch: req.body.radioBranch
                            });
                            bcrypt.genSalt(10, (err, salt) => {
                                bcrypt.hash(newUser.password, salt, (err, hash) => {
                                    if (err) throw err
                                    newUser.password = hash;
                                    newUser.save()
                                        .then(user => {
                                            user.findOne({ email: LogedUser })
                                                .then(manager => {
                                                    managingId = manager._id
                                                })
                                            user.findOne({ email: req.body.Email })
                                                .then(managed => {
                                                    managedId = managed._id;
                                                })
                                            const newManaging = new manages({
                                                ManagerID: managingId,
                                                ManagedID: managedId
                                            })
                                            newManaging.save()
                                                .then(manageing => {
                                                    res.render('CentralSM/registor', {
                                                        success: 'Login to continue.'
                                                    })
                                                })

                                        })
                                        .catch(err => {
                                            res.render('CentralSM/registor', {
                                                signupError: "Please review your form",
                                                fullName: req.body.fullName,
                                                email: req.body.Email,
                                                phoneNumber: req.body.phoneNumber,
                                                location: req.body.location
                                            });
                                        })
                                })
                            })
                        }

                    }
                })
        }
    }
});

//handle the shop storage manager registering
router.post('/ssm/createAccount', (req, res) => {
    let managingId, managedId;
    const userVal_Data = {
        fullName: req.body.fullName,
        password: req.body.password,
        email: req.body.Email,
        location: req.body.location,
        phoneNumber: req.body.phoneNumber
    }
    const { error } = validate(userVal_Data);
    if (error) {
        res.render('shopSM/registeration', {
            signupError: error.details[0].message,
            fullName: req.body.fullName,
            email: req.body.Email,
            phoneNumber: req.body.phoneNumber,
            location: req.body.location
        });
    } else {
        if (req.body.password != req.body.confirmPassword) {
            res.render('shopSM/registeration', {
                signupError: "Password Need to be the same",
                fullName: req.body.fullName,
                email: req.body.Email,
                phoneNumber: req.body.phoneNumber,
                location: req.body.location
            });
        } else {
            //check that the user is found in the database
            user.findOne({ email: req.body.Email })
                .then(users => {
                    if (users) {
                        res.render('shopSM/registeration', {
                            signupError: "Email Address already in use",
                            fullName: req.body.fullName,
                            email: req.body.Email,
                            phoneNumber: req.body.phoneNumber,
                            location: req.body.location
                        });
                    } else {
                        //bcrypt the password and save user
                        let userType = 'cashier';
                        if ('on' == req.body.argument) {
                            if (req.body.gridRadios == 'Cashier') {
                                userType = 'cashier'
                            } else if (req.body.gridRadios == 'Cook') {
                                userType = 'cooker'
                            } else if (req.body.gridRadios == 'DeliveryAgent') {
                                userType = 'deliveryAgent'
                            } else {
                                res.render('shopSM/registeration', {
                                    signupError: "Select the user Type",
                                    fullName: req.body.fullName,
                                    email: req.body.Email,
                                    phoneNumber: req.body.phoneNumber,
                                    location: req.body.location
                                });
                            }
                            let ssmBranch; 
                            user.findOne({email : LogedUser})
                            .then(manager =>{
                                ssmBranch = manager.branch; 
                            })
                            let newUser = new user({
                                fullName: req.body.fullName,
                                email: req.body.Email,
                                phoneNumber: req.body.phoneNumber,
                                password: req.body.password,
                                location: req.body.location,
                                userType: userType,
                                branch : ssmBranch
                            });
                            bcrypt.genSalt(10, (err, salt) => {
                                bcrypt.hash(newUser.password, salt, (err, hash) => {
                                    if (err) throw err
                                    newUser.password = hash;
                                    newUser.save()
                                        .then(user => {
                                            user.findOne({ email: LogedUser })
                                                .then(manager => {
                                                    managingId = manager._id
                                                })
                                            user.findOne({ email: req.body.Email })
                                                .then(managed => {
                                                    managedId = managed._id;
                                                })
                                            const newManaging = new manages({
                                                ManagerID: managingId,
                                                ManagedID: managedId
                                            })
                                            newManaging.save()
                                                .then(manageing => {
                                                    res.render('shopSM/registeration', {
                                                        success: 'Login to continue.'
                                                    });
                                                })

                                        })
                                        .catch(err => {
                                            res.render('shopSM/registeration', {
                                                signupError: "Please review your form",
                                                fullName: req.body.fullName,
                                                email: req.body.Email,
                                                phoneNumber: req.body.phoneNumber,
                                                location: req.body.location
                                            });
                                        })
                                })
                            })
                        } else {
                            res.render('shopSM/registeration', {
                                signupError: "Review the provided argument",
                                fullName: req.body.fullName,
                                email: req.body.Email,
                                phoneNumber: req.body.phoneNumber,
                                location: req.body.location
                            });
                        }

                    }
                })
        }
    }
});


module.exports = router