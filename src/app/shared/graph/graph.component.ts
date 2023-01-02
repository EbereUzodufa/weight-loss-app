import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

interface IGraph {
  tue: number;
  wed: number;
  thur: number;
  fri: number;
  sat: number;
  sun: number;
  mon: number;
}

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GraphComponent implements OnInit {
  @Input() graph!: IGraph;
  @Input() thresshold = 8;
  @Input() showYLabel = true;
  @Input() showXLabel = true;
  @Input() ratio = 2;
  @Input() borderType: 'rounded' | 'partial' | 'none' = 'partial';

  higherLimit!: number;
  rowLength = 0;
  rowArray!: number[];

  constructor() {}

  ngOnInit(): void {
    this.higherLimit = Math.max(...Object.values(this.graph));
    this.rowLength = Math.floor(this.higherLimit / this.ratio);
    this.rowArray = Array(this.rowLength).fill(0);
  }

  sortOrder() {
    return 0;
  }
}
