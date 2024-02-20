interface IGoogleApi {
  xmlData(): string;
}

interface IPersonalApi {
  jsonData(): string;
}

class GoogleApi implements IGoogleApi {
  xmlData(): string {
    return "xml data";
  }
}

class PersonalApi implements IPersonalApi {
  jsonData(): string {
    return "json data";
  }
}

class XmlToJsonAdapter implements IPersonalApi {
  private googleApi: IGoogleApi;

  constructor(googleApi: IGoogleApi) {
    this.googleApi = googleApi;
  }

  jsonData(): string {
    const xmlData = this.googleApi.xmlData();
    return `${xmlData} converted to json data`;
  }
}

const adapter = new XmlToJsonAdapter(new GoogleApi());
console.log(adapter.jsonData());
