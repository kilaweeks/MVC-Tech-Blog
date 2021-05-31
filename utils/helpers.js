
module.exports = {
    format_date: date => {
      return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    },
    format_plural: (comment, count) => {
      if (count !== 1) {
        return `${comment}s`;
      }
      return comment;
    }  
  }; 