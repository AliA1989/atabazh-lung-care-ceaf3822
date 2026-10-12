// Source: SLP Current Prototype Architecture, reviewed 7 October 2026.
// Firmware configuration values, not measured acquisition performance.
export const acquisitionChannels = [
  { name: "Contact-force sensor", hardware: "FX29", rate: "25", interval: "40 ms read interval", description: "Digital load-cell acquisition with median and moving-average filtering." },
  { name: "Motion & orientation", hardware: "MPU6050", rate: "50", interval: "20 ms read interval", description: "Accelerometer and gyroscope readings support filtered roll and pitch." },
  { name: "Wireless telemetry", hardware: "Bluetooth Low Energy", rate: "10", interval: "100 ms nominal interval", description: "Device and sensor-hub links transmit the latest available readings." },
];

// Source: Week 5 engineering log, 7 June 2026. Completion is documented;
// packet-loss, clinical performance, and acceptance criteria are not inferred.
export const documentedBenchRun = {
  duration: "30",
  date: "7 June 2026",
  dateTime: "2026-06-07",
  title: "BLE communication bench run",
  conditions: "Motor running without external load",
  finding: "A 30-minute communication test was completed and recorded in the engineering log.",
};
