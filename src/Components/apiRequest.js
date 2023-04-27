const apiRequest = async (api = '', optionsObj = null, errMsg = null) => {
	try{
		const response = await fetch(api, optionsObj);
		if(!response.ok) throw Error('Please reload the app');
	} catch(err){
		errMsg = err.message;
	} finally {
		return errMsg;
	}
}

export default apiRequest;