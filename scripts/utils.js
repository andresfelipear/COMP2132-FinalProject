function validateEmptyField(field)
{
    if(field.value.trim().length === 0)
    {
        addErrorMessage(field, "This field can't be empty or blank.");
        return true;
    }
    removeErrorMessage(field);
    return false;
}

function removeErrorMessage(element)
{
    let parentElement = element.parentNode;

    element.classList.remove("error-field");

    if(parentElement.getAttribute("class") === null)
    {
        parentElement = parentElement.parentNode;
    }

    const errorMessage  = parentElement.querySelector(".error-message");

    if(errorMessage != null)
    {
        parentElement.removeChild(errorMessage);
    }   
}

function addErrorMessage(element, message)
{
    let parentElement   = element.parentNode;
    const errorMessage  = document.createElement('p');

    element.classList.add('error-field');
    errorMessage.className = "error-message";
    errorMessage.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${message}`;
    if(parentElement.getAttribute("class") === null)
    {
        parentElement = parentElement.parentNode;
    }

    if(!parentElement.querySelector(".error-message"))
    {
        parentElement.appendChild(errorMessage);
    }
}

function getCurrentDateFormatted()
{
    const currentDate = new Date();

    const year  = currentDate.getFullYear();
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    const day   = ('0' + currentDate.getDate()).slice(-2);

    return `${year}-${month}-${day}`;
}

function toTitleCase(string)
{
    return string.charAt(0).toUpperCase() + string.substring(1);
}

function getImageNameFromPath(str, pattern)
{
    const LENGTH_IMG_FORMAT = 4;
    const position  = str.search(pattern);
    const imageName = str.substring(position, str.length - LENGTH_IMG_FORMAT);
    
    return imageName;
}

function updateImagePath(element, current, imageName)
{
    const IMAGE_FORMAT      = "jpg";
    const mainImagePath     = element.getAttribute("src");
    const position          = mainImagePath.search(imageName);
    const imagePath         = mainImagePath.substring(0, position);
    const newMainImagePath  = imagePath + `${imageName}-${current}.${IMAGE_FORMAT}`;

    element.src = newMainImagePath;
    element.alt = getImageNameFromPath(newMainImagePath, imageName);
}
