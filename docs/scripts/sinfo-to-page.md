# Converting `sinfo` Output to Markdown

This script reads the text output from the `sinfo` command and generates a Markdown summary for each partition.

## Usage

1. Save the output of `sinfo` to a file:
   ```bash
   sinfo > sinfo.txt
   ```
2. Run the conversion script:
   ```bash
   python docs/scripts/sinfo_to_markdown.py sinfo.txt > partitions.md
   ```
3. Open `partitions.md` in a viewer or add it to the documentation site.

## Example

Given an input file containing:

```text
PARTITION         AVAIL  TIMELIMIT  NODES  STATE NODELIST
cpu*                 up 7-00:00:00      4   idle ist-compute-1-[001-004]
```

the generated Markdown looks like:

```markdown
## Partition `cpu*`

- **Availability:** up
- **Time limit:** 7-00:00:00

| State | Nodes | Node list |
|-------|-------|-----------|
| idle | 4 | ist-compute-1-[001-004] |
```

