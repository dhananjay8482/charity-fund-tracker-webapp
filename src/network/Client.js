import axiosInstance from '../utils/axios';


/**
 * @description Login for Donor: authorize and store jwt in session storage todo: will change it to localStorage
 * @param email
 * @param password
 */
export function donorLogin(email, password) {
  axiosInstance.post('doners/login', {
      email: email,
      password: password,
    },
  ).then(function(response) {
      if (response.status === 200) {
        const token = response.data.access_token;
        window.sessionStorage.setItem('token', token);
        console.log('Login Success Token: ' + token);
      } else {
        throw Error('Client Failed');
      }
    },
  ).catch((error) => {
    console.error(error.toString());
  });
}

/**
 * @description New Donor Registration
 * @param user: json with name, email, username, password, dob, phone1, phone2, meta_wallet_address
 */
export function donorSignup(user) {
  axiosInstance.post('doners/register', user,
  ).then(function(response) {
      if (response.status === 200 && response.data.status === true) {
        console.log('Signup Success');
      } else {
        throw Error('Signup Failed');
      }
    },
  ).catch((error) => {
    console.error(error.toString());
  });
}
