function getBtnStyling(styleType) {
    const baseStyles = 'w-48 h-14 rounded text-white font-semibold transition duration-300 m-4';
    
    if (styleType === 'primary') {
        return `${baseStyles} bg-blue-400 hover:bg-blue-500`;
    }else if(styleType=='success'){
        return `${baseStyles} bg-green-400 hover:bg-green-500`;
    } else {
        return `${baseStyles} bg-orange-400 hover:bg-orange-500`;
    }
}

export default getBtnStyling;
