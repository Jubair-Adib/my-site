import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import os from "os";

const DATA_DIR = path.join(process.cwd(), "data");
const FALLBACK_DIR = path.join(os.tmpdir(), "salami-viewcount");
const FILENAME = "viewcount.json";

async function getCount() {
  for (const dir of [DATA_DIR, FALLBACK_DIR]) {
    try {
      const filePath = path.join(dir, FILENAME);
      const data = await readFile(filePath, "utf-8");
      const json = JSON.parse(data);
      return typeof json.count === "number" ? json.count : 0;
    } catch {
      continue;
    }
  }
  return 0;
}

async function setCount(count) {
  const payload = JSON.stringify({ count });
  try {
    await mkdir(DATA_DIR, { recursive: true });
    await writeFile(path.join(DATA_DIR, FILENAME), payload, "utf-8");
  } catch {
    await mkdir(FALLBACK_DIR, { recursive: true });
    await writeFile(path.join(FALLBACK_DIR, FILENAME), payload, "utf-8");
  }
}

export async function GET() {
  try {
    const count = await getCount();
    return Response.json({ count });
  } catch (e) {
    return Response.json({ count: 0 });
  }
}

export async function POST() {
  try {
    const count = (await getCount()) + 1;
    await setCount(count);
    return Response.json({ count });
  } catch (e) {
    return Response.json({ count: 0 }, { status: 500 });
  }
}
