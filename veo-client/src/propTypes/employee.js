import PropTypes from "prop-types";

export const employee = PropTypes.shape({
  employeeID: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  departmentName: PropTypes.string,
  phoneNumber: PropTypes.string,
  email: PropTypes.string.isRequired,
});

export const employeeWithReports = PropTypes.shape({
  ...employee,
  reports: PropTypes.arrayOf(PropTypes.shape(employee)),
});
