module.exports = {


/**
*	@param {String} domain
*	@return {String} email
*   Generates random email strings with valid format ~
*/

    emailRandom : function (domain = '@mail.com') {
    
	    return Math.random().toString(36).substring(7) + domain;
    },

/**  
 *  Generates a string of X 'A' characters 
 *  to test Max length inputs
 *  on text boxes ~ 
 */     

    maxChar32 : function () {

        return [...Array(33)].fill('A').join('');
    },

    maxChar64 : function () {

        return [...Array(65)].fill('A').join('');
    },

    maxChar128 : function () {

        return [...Array(129)].fill('A').join('');
    },

    maxChar300 : function () {

        return [...Array(301)].fill('A').join('');
    }
}



