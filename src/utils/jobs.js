export const getJobType = job =>
  job &&
  job.type === 1
    ? 'Fixed price'
    : 'Hourly';

export const isPaymentVerified = job =>
  job &&
  job.client &&
  job.client.paymentVerificationStatus;

export const clientFeedback = job =>
  job &&
  job.client &&
  job.client.totalFeedback;

export const totalSpent = job =>
  job &&
  job.client &&
  job.client.totalSpent;

export const totalSpentReadable = job => {
  const spent = totalSpent(job);

  if (spent >= 1000000) {
    return `$${parseInt(spent / 1000000, 10)}M+`
  }

  if (spent >= 1000) {
    return `$${parseInt(spent / 1000, 10)}k+`;
  }

  if (spent >= 100) {
    return `$${parseInt(spent / 100, 10)}`;
  }

  return `$${spent}`
};

export const getCountry = job =>
  job &&
  job.client &&
  job.client.location &&
  job.client.location.country;
