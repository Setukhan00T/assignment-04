function waitingTime(waitingTimes, serialNumber) {
  if (!Array.isArray(waitingTimes) || typeof serialNumber !== "number")
     {
    return "invalid input";
  }
  let totalWaitTime = 0;
  for (const wait_time of waitingTimes) {
    totalWaitTime += wait_time;
  }
  const wait_avg = Math.round(totalWaitTime / waitingTimes.length);

  const interviewDone = waitingTimes.length;
  const peopleBeforeIsraat = serialNumber - 1;

  const remainingInterviews = peopleBeforeIsraat - interviewDone;

  const isratWaitingTime = remainingInterviews * wait_avg;
  return isratWaitingTime;
}

const array = [7, 9];
const serialNumber = 4;
const result = waitingTime(array, serialNumber);
console.log(result);
