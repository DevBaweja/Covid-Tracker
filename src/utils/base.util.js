export const formatNumber = num => num.toLocaleString();

export const currentDate = () => {
    let date = new Date();
    date = date.toLocaleDateString(this, { day: '2-digit', month: '2-digit', year: 'numeric' });
    getDateStrFormatted(date, '/');
};

// export const formatDate = date => getDateStrFormatted(date.slice(0, 10), '-');
export const formatDate = date => new Date(date).toDateString();

export const getDateStrFormatted = (dateStr, char) => {
    const [year, month, day] = dateStr.split(char);
    return `${day}/${month}/${year}`;
};

export const capitalize = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

export const uppercase = str => str.toUpperCase();

export const nFormatter = cases => {
    if (cases >= 1e12) return +(cases / 1e12).toFixed(1) + 'T';
    else if (cases >= 1e9) return +(cases / 1e9).toFixed(1) + 'B';
    else if (cases >= 1e6) return +(cases / 1e6).toFixed(1) + 'M';
    else if (cases >= 1e3) return +(cases / 1e3).toFixed(1) + 'K';
    else return cases;
};
