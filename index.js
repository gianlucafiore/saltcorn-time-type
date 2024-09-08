const time = {
  name: "Time",
  sql_name: "time",
  fieldviews: {
    show: { isEdit: false, run: (s) => `${s}` },
    edit: {
      isEdit: true,
      run: (nm, v, attrs, cls) =>{
        console.log(v)
        return `<input type="time" class="form-control ${cls}" name="${nm}" id="input${nm}" ${
          v || v === 0 ? `value="${v}"` : ""
        }>`
      },
    },
  },
  read: (v) => {
    switch (typeof v) {
      case "number":
        return v;
      case "string":
        const parsed = parseFloat(v);
        return isNaN(parsed) ? undefined : parsed;
      default:
        return undefined;
    }
  },
};

module.exports = { sc_plugin_api_version: 1, types: [time] };