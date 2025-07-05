#!/usr/bin/env python3
import sys
from pathlib import Path
from collections import defaultdict


def parse_sinfo(file_path):
    data = defaultdict(lambda: {"avail": "", "timelimit": "", "rows": []})
    with open(file_path) as f:
        lines = [line.strip() for line in f if line.strip()]
    if not lines:
        raise ValueError("Input file is empty")
    header = lines[0]
    cols = header.split()
    if len(cols) < 6 or cols[0].lower() != "partition":
        raise ValueError("Unexpected file format")
    for line in lines[1:]:
        parts = line.split()
        if len(parts) < 6:
            continue
        partition = parts[0]
        avail = parts[1]
        timelimit = parts[2]
        nodes = parts[3]
        state = parts[4]
        nodelist = " ".join(parts[5:])
        entry = {"state": state, "nodes": nodes, "nodelist": nodelist}
        group = data[partition]
        if not group["avail"]:
            group["avail"] = avail
        if not group["timelimit"]:
            group["timelimit"] = timelimit
        group["rows"].append(entry)
    return data


def generate_markdown(data):
    out_lines = []
    for part in sorted(data):
        info = data[part]
        out_lines.append(f"## Partition `{part}`")
        out_lines.append("")
        out_lines.append(f"- **Availability:** {info['avail']}")
        out_lines.append(f"- **Time limit:** {info['timelimit']}")
        out_lines.append("")
        out_lines.append("| State | Nodes | Node list |")
        out_lines.append("|-------|-------|-----------|")
        for row in info["rows"]:
            out_lines.append(f"| {row['state']} | {row['nodes']} | {row['nodelist']} |")
        out_lines.append("")
    return "\n".join(out_lines)


def main():
    if len(sys.argv) != 2:
        print("Usage: python sinfo_to_markdown.py <sinfo_output.txt>")
        sys.exit(1)
    path = Path(sys.argv[1])
    if not path.is_file():
        print(f"File not found: {path}")
        sys.exit(1)
    data = parse_sinfo(path)
    md = generate_markdown(data)
    print(md)


if __name__ == "__main__":
    main()

