export default class Util {
  static async fetchApi(url: string, options: {}) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Error with the response fetch");
      }
      return response.json();
    } catch (error) {
      console.log({ message: "Error with the method fetchApi", error });
    }
  }
}
