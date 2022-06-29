import React, { useState } from "react";
import { Box, Select, Stack } from "@chakra-ui/react";
import { filterData, getFilterValues } from "../Utils/filterData";
import { useRouter } from "next/router";

const Filter = ({
  direction,
  mb,
  spacing,
  border,
  borderColor,
  p,
  bg,
  simplified,
}) => {
  const [filterD] = useState(filterData);
  const router = useRouter();

  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });
    if (!simplified) {
      router.push({ pathname: path, query: query });
    }
  };
  return (
    <Stack
      direction={direction}
      mb={mb}
      spacing={spacing}
      border={border}
      borderColor={borderColor}
      p={p}
      bg={bg}
    >
      {filterD?.map((filter) => (
        <Box key={filter.queryName}>
          <Select
            onChange={(e) =>
              searchProperties({ [filter.queryName]: e.target.value })
            }
            placeholder={filter.placeholder}
            w="fit-content"
            p="2"
            bg={bg}
          >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Stack>
  );
};

export default Filter;
