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
          v || v === 0 ? `value='${v}'` : ""
        }>`
      },
    },
  },
  read: (v) => {
    return v;
  },
};

module.exports = { sc_plugin_api_version: 1, types: [time] };