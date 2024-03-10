TEST_PATH="./src/"

if ! [ -z $1 ]
then
    TEST_PATH="${TEST_PATH}${1}"
fi

vitest --ui $TEST_PATH