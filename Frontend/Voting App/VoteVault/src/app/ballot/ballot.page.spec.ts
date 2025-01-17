import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BallotPage } from './ballot.page';


describe('BallotPage', () => {
  let component: BallotPage;
  let fixture: ComponentFixture<BallotPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BallotPage ],
      imports: [IonicModule.forRoot(), RouterModule.forRoot([])]
    }).compileComponents();

    fixture = TestBed.createComponent(BallotPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a ballot1 class member', () => {
    expect(component.ballot1).toEqual(jasmine.any(Object));
  })

  it('should have a ballot2 class member', () => {
    expect(component.ballot2).toEqual(jasmine.any(Object));
  })

  it('should have a ballot3 class member', () => {
    expect(component.ballot3).toEqual(jasmine.any(Object));
  })

  it('should have a slideIndex class member', () => {
    expect(component.slideIndex).toEqual(jasmine.any(Number));
  })

  it('should have a selected class member', () => {
    expect(component.selected).toEqual(jasmine.any(Object));
  })


});
