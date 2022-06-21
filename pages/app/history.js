import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import DashboardWrapper from "../../components/app/DashboardWrapper";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Text,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
} from "@chakra-ui/react";
import helpers from "../../helpers";

function History() {
  const [transactions, setTransactions] = useState([]);
  const [userID, setUserID] = useState("");
  const [loading, setLoading] = useState(true);

  const { query } = useRouter();
  // setUserID(query._id);

  useEffect(() => {
    async function getTx() {
      await helpers
        .getTransactions(query._id)
        .then((data) =>setTransactions(data?.data?.data.withdrawals))
        .then(() => setLoading(false));
    }

    getTx();
  }, []);

  return (
    <div>
      <DashboardWrapper>
        <Text fontSize="2xl" mb={4}>
          Transaction History
        </Text>

        {loading ? (
          <Text textAlign="center" color="black" my={6}>
            Fetching data...
          </Text>
        ) : (
          <Box h={"fit-content"}>
            <TableContainer>
              <Table variant="striped">
                <Thead bgColor="yellow.400">
                  <Tr>
                    <Th
                      textTransform="capitalize"
                      color="black"
                      fontFamily="inherit"
                      fontSize="1rem"
                      fontWeight="normal"
                    >
                      Amount
                    </Th>
                    <Th
                      textTransform="capitalize"
                      color="black"
                      fontFamily="inherit"
                      fontSize="1rem"
                      fontWeight="normal"
                    >
                      Status
                    </Th>
                    <Th
                      textTransform="capitalize"
                      color="black"
                      fontFamily="inherit"
                      fontSize="1rem"
                      fontWeight="normal"
                    >
                      {" "}
                      Payment Method
                    </Th>
                    <Th
                      textTransform="capitalize"
                      color="black"
                      fontFamily="inherit"
                      fontSize="1rem"
                      fontWeight="normal"
                    >
                      {" "}
                      Wallet Address
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {transactions?.map((tx) => {
                    return (
                      <Tr key={Math.random()}>
                        <Td>${tx?.amount}</Td>
                        <Td>pending</Td>
                        <Td>{tx?.method}</Td>
                        <Td>{tx?.address}</Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        )}
      </DashboardWrapper>
    </div>
  );
}

export default History;
