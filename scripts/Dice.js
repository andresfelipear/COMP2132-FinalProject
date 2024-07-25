class Dice
{
    #name;
    #value;
    #url;
    #image;

    constructor(name, value, url)
    {
        this.setName(name);
        this.setValue(value);
        this.setUrl(url);
        this.#image = new Image();
        this.#image.src = this.#url;
        this.#image.alt = this.#name;
    }

    // Getters
    getName()
    {
        return this.#name;
    }

    getValue()
    {
        return this.#value;
    }

    getUrl()
    {
        return this.#url;
    }

    getImage()
    {
        return this.#image;
    }

    // Setters
    setName(name)
    {
        this.#name = name; 
    }

    setValue(value)
    {
        this.#value = value;
    }

    setUrl(url)
    {
        this.#url = url;
    }

}