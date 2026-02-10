const url = 'https://thesimpsonsapi.com/api/';

export async function fetchUsers(name = "") {
  try {
    const res = await fetch(`${url}characters`);

    if (!res.ok) {
      return {
        ok: false,
        error: `Erreur serveur: ${res.status}`,
        data: null,
      };
    }

    const data = await res.json();

    return {
      ok: true,
      error: null,
      data,
    };
  } catch (err) {
    return {
      ok: false,
      error: err.message || "Erreur inconnue",
      data: null,
    };
  }
}

export async function fetchAnUser(id) {
  try {
    const res = await fetch(`${url}characters/${id}`);

    if (!res.ok) {
      return {
        ok: false,
        error: `Erreur serveur: ${res.status}`,
        data: null,
      };
    }

    const data = await res.json();

    return {
      ok: true,
      error: null,
      data,
    };
  } catch (err) {
    return {
      ok: false,
      error: err.message || "Erreur inconnue",
      data: null,
    };
  }
}

// 🔥 Export par défaut regroupé
export default {
  fetchUsers,
  fetchAnUser,
};
