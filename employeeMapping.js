  let employees = [
    {
      id: 1,
      name: "Ravi",
      designation: "Manager",
      vouchers: [
        {
          id: 1000,
          name: "Meal",
          amount: 100
        },
        {
          id: 1001,
          name: "Meal",
          amount: 400
        },
        {
          id: 1002,
          name: "Meal",
          amount: 300
        },
        {
          id: 1003,
          name: "Meal",
          amount: 700
        }
      ]
    },
    {
      id: 2,
      name: "Subhash",
      designation: "Technical Lead",
      vouchers: [
        {
          id: 1004,
          name: "Meal",
          amount: 500
        }
      ]
    },
    {
      id: 3,
      name: "Kamath",
      designation: "Senior Software Engineer",
      vouchers: [
        {
          id: 1005,
          name: "Meal",
          amount: 500
        },
        {
          id: 1006,
          name: "Meal",
          amount: 200
        },
        {
          id: 1007,
          name: "Meal",
          amount: 300
        }
      ]
    }
  ];

const newArray = employees.map((employee) => {
  return employee.vouchers.map((voucher) => {
    return {
      VoucherId: voucher.id,
      VoucherName: voucher.name,
      VoucherAmount: voucher.amount,
      Employeename: employee.name,
      designation: employee.designation,
    };
  });
});

console.log(newArray);