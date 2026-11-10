import { AfterViewInit, Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MenuItem } from './menu-item.model';
import { MENU_CATEGORIES, MENU_ITEMS } from './menu.data';
import { ReservationService } from './reservation.service';
import { ReservationRequest } from './menu-item.model';

// interface MenuItem {
//   id: number; name: string; description: string; price: number;
//   category: string; vegetarian: boolean; image: string; badge?: string;
// }

@Component({
  selector: 'sg-root', standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  // readonly categories = ['All', 'Starters', 'North Indian', 'Rice & Biryani', 'Indian Breads', 'Chinese', 'South Indian', 'Fast Food', 'Beverages', 'Desserts', 'Thali & Combos'];
  // readonly menuItems: MenuItem[] = [
  //   { id: 1, name: 'Paneer Tikka', description: 'Chargrilled cottage cheese, house spices and mint chutney.', price: 260, category: 'Starters', vegetarian: true, badge: 'Bestseller', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxTw8NVKe8YVBKYcgyXe4358BKjMnPkAtjn4Tch4zNokahTdATHcwWXwlEXXtnOiDxhIezz4obxYi_LSYGglacfzbzrVMNNPVojIQbOQ&s=10?auto=format&fit=crop&w=900&q=85' },
  //   { id: 2, name: 'Dahi Ke Kebab', description: 'Soft hung-curd kebabs with a delicate crisp finish.', price: 230, category: 'Starters', vegetarian: true, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85' },
  //   { id: 3, name: 'Butter Chicken', description: 'Slow-simmered tomato gravy, cream and fragrant spices.', price: 390, category: 'North Indian', vegetarian: false, badge: 'Chef’s special', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=900&q=85' },
  //   { id: 4, name: 'Paneer Lababdar', description: 'Paneer in a rich, gently spiced onion-tomato gravy.', price: 330, category: 'North Indian', vegetarian: true, image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=85' },
  //   { id: 5, name: 'Dum Vegetable Biryani', description: 'Aromatic basmati rice layered with seasonal vegetables.', price: 290, category: 'Rice & Biryani', vegetarian: true, badge: 'Bestseller', image: 'https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=900&q=85' },
  //   { id: 6, name: 'Chicken Dum Biryani', description: 'Fragrant dum-cooked rice with tender chicken and herbs.', price: 360, category: 'Rice & Biryani', vegetarian: false, image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=900&q=85' },
  //   { id: 7, name: 'Butter Naan', description: 'Tandoor-baked soft bread finished with cultured butter.', price: 55, category: 'Indian Breads', vegetarian: true, image: 'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?auto=format&fit=crop&w=900&q=85' },
  //   { id: 8, name: 'Masala Dosa', description: 'Golden rice crepe with spiced potato and coconut chutney.', price: 160, category: 'South Indian', vegetarian: true, image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=85' },
  //   { id: 9, name: 'Gulab Jamun', description: 'Warm milk dumplings with cardamom-scented syrup.', price: 110, category: 'Desserts', vegetarian: true, image: 'https://images.unsplash.com/photo-1666190092159-3b3b6f4a5b8f?auto=format&fit=crop&w=900&q=85' },
  //   { id: 10, name: 'Mango Lassi', description: 'Chilled yoghurt blended with ripe mango.', price: 120, category: 'Beverages', vegetarian: true, image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&w=900&q=85' }
  // ];

  readonly categories = MENU_CATEGORIES;
  readonly menuItems: MenuItem[] = MENU_ITEMS;

  activeCategory = 'All';
  mobileMenuOpen = false;
  scrolled = false;
  reservationMessage = '';
  contactMessage = '';
  readonly today = new Date().toISOString().slice(0, 10);
  private observer?: IntersectionObserver;

  reservationForm = this.fb.nonNullable.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[+]?[-\d\s()]{8,16}$/)]],
    date: ['', Validators.required], time: ['', Validators.required],
    guests: [2, [Validators.required, Validators.min(1), Validators.max(20)]],
    specialRequest: ['']
  });
  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  constructor(
    private fb: FormBuilder,
    private reservationService: ReservationService
  ) { }


  ngOnInit(): void { this.onScroll(); }
  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); }
    }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => this.observer?.observe(el));
  }
  ngOnDestroy(): void { this.observer?.disconnect(); }
  @HostListener('window:scroll') onScroll(): void { this.scrolled = window.scrollY > 24; }
  get filteredItems(): MenuItem[] { return this.activeCategory === 'All' ? this.menuItems : this.menuItems.filter(item => item.category === this.activeCategory); }
  selectCategory(category: string): void { this.activeCategory = category; }
  scrollTo(id: string): void { this.mobileMenuOpen = false; document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); }


  
submitReservation(): void {

  this.reservationMessage = '';

  // 1. Validate form
  if (this.reservationForm.invalid) {
    this.reservationForm.markAllAsTouched();
    this.reservationMessage =
      'Please complete all required fields with valid details.';
    return;
  }

  // 2. Validate booking date
  const formValue = this.reservationForm.getRawValue();

  if (formValue.date < this.today) {
    this.reservationMessage =
      'Please select today or a future date.';
    return;
  }

  // 3. Map Angular form fields to backend entity properties
  const payload: ReservationRequest = {
    name: formValue.fullName,
    emailId: formValue.email,
    phoneNumber: formValue.phone,
    table_size: formValue.guests,
    bookingDate: formValue.date,
    bookingTime: formValue.time,
    specialRequest: formValue.specialRequest
  };

  // 4. Send POST request to Spring Boot API
  this.reservationService.submitReservation(payload).subscribe({

    next: (response) => {

      console.log('Reservation saved:', response);

      this.reservationMessage =
        'Your table reservation has been submitted successfully!';

      // Reset form after successful submission
      this.reservationForm.reset({
        fullName: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: 2,
        specialRequest: ''
      });

    },

    error: (error) => {

      this.reservationMessage =
        error.error?.message ||
        'Unable to submit reservation. Please try again.';

    }

  });
}


  submitContact(): void {
    this.contactMessage = '';
    if (this.contactForm.invalid) { this.contactForm.markAllAsTouched(); this.contactMessage = 'Please enter a valid name, email and message.'; return; }
    this.contactMessage = 'The form is validated, but message delivery is not connected yet.';
    this.contactForm.reset();
  }
}
