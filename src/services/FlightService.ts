const API = "http://localhost:8000";
export const Http = {
  Request: async <A>(url: string, params?: Record<string, any>): Promise<A> => {
    return new Promise((resolve, reject) => {
      fetch(`${API}${url}${params ? params : ""}`)
        .then((response) => (response as Response).json())
        .then((json) => resolve(json))
        .catch((error) => reject(error));
    });
  },
};

export const getTickets = () => Http.Request("/tickets");
export const getFilteredTickets = (id: string) =>
  Http.Request("/tickets?stops=" + id);
