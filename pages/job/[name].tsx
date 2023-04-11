import React from "react";
import { useRouter } from 'next/router'
import Job from "../../components/Job/Job";
const Category = () => {
  const router = useRouter()
  const { name } = router.query
  return (
    <div>
      <Job selectedCategory={name} />
    </div>
  );
};

export default Category;
