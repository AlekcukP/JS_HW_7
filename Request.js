class Request {
    #url;

    constructor(url) {
        this.#url = url;
    }

    get = (parameter) => {
        return this.#indostanFetch(parameter, "GET");
    }

    post(parameter, body) {
        return this.#indostanFetch(parameter, "POST", {
            'Content-Type': 'application/json'
        }, body);
    }

    put = (parameter, body) => {
        return this.#indostanFetch(parameter, "PUT", {
            'Content-Type': 'application/json'
        }, body);
    }

    delete = (parameter) => {
        return this.#indostanFetch(parameter, "DELETE");
    }

    #indostanFetch = async (parameter, method, headers = undefined, body = undefined) => {
        return await fetch(this.#url + parameter, {
            method: method,
            headers: headers,
            body: body
        }).then((response) => {
            if (!response.ok) throw new Error('Error occurred.')
            return response.json();
        }).catch(error => {
            console.error('Error:', error);
        });
    }
}