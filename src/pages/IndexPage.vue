<template>
  <q-page class="bg-dark-page">
    <!-- Hero Section -->
    <div class="hero-section q-pa-xl">
      <div class="row justify-between items-center">
        <div class="col-12 col-md-6">
          <h1 class="text-h2 text-weight-bold text-white">Hackathon Updates</h1>
          <div class="text-subtitle1 text-grey-5 q-mt-md">
            Explore upcoming hackathons from top platforms and track your achievements
          </div>
        </div>
        <div class="col-12 col-md-6 flex justify-center">
          <img
            src="src/assets/Black_White_Retro_Y2K_Streetwear_Star_Logo-removebg-preview.png"
            class="hero-image"
          />
        </div>
      </div>
    </div>

    <section class="text-center q-py-lg">
      <q-btn
        class="gradient-btn q-px-xl"
        @click="openAddHackathonDialog"
        icon="add"
        label="Add Past Hackathon"
      >
        <q-tooltip>Add a completed hackathon to the archive</q-tooltip>
      </q-btn>
    </section>

    <!-- Platform Cards -->
    <div class="platform-section q-pa-xl">
      <div class="row q-col-gutter-xl">
        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="platform-card">
            <q-card-section class="text-center">
              <div class="platform-icon q-mb-md">
                <q-icon name="code" size="32px" color="primary" />
              </div>
              <div class="text-h6 text-weight-bold text-white q-mb-sm">Unstop</div>
              <div class="text-caption text-grey-5 q-mb-lg">College Hackathons</div>
              <q-btn
                flat
                color="primary"
                class="full-width platform-btn"
                @click="openHackathonPlatform('unstop')"
                label="Explore"
                icon-right="launch"
              />
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="platform-card">
            <q-card-section class="text-center">
              <div class="platform-icon q-mb-md">
                <q-icon name="laptop" size="32px" color="secondary" />
              </div>
              <div class="text-h6 text-weight-bold text-white q-mb-sm">DevPost</div>
              <div class="text-caption text-grey-5 q-mb-lg">Global Competitions</div>
              <q-btn
                flat
                color="secondary"
                class="full-width platform-btn"
                @click="openHackathonPlatform('devpost')"
                label="Explore"
                icon-right="launch"
              />
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="platform-card">
            <q-card-section class="text-center">
              <div class="platform-icon q-mb-md">
                <q-icon name="code_off" size="32px" color="accent" />
              </div>
              <div class="text-h6 text-weight-bold text-white q-mb-sm">HackerEarth</div>
              <div class="text-caption text-grey-5 q-mb-lg">Coding Challenges</div>
              <q-btn
                flat
                color="accent"
                class="full-width platform-btn"
                @click="openHackathonPlatform('hackerearth')"
                label="Explore"
                icon-right="launch"
              />
            </q-card-section>
          </q-card>
        </div>

        <div class="col-12 col-sm-6 col-md-3">
          <q-card class="platform-card">
            <q-card-section class="text-center">
              <div class="platform-icon q-mb-md">
                <q-icon name="school" size="32px" color="positive" />
              </div>
              <div class="text-h6 text-weight-bold text-white q-mb-sm">Reskilll</div>
              <div class="text-caption text-grey-5 q-mb-lg">Learning Challenges</div>
              <q-btn
                flat
                color="positive"
                class="full-width platform-btn"
                @click="openHackathonPlatform('reskilll')"
                label="Explore"
                icon-right="launch"
              />
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <div id="past-hackathons" class="past-hackathons q-pa-xl">
      <h2 class="text-h4 text-weight-bold text-white q-mb-xl">Past Hackathons</h2>

      <div class="row q-col-gutter-xl">
        <div v-for="hackathon in pastHackathons" :key="hackathon.id" class="col-12 q-mb-xl">
          <q-card class="hackathon-card">
            <div class="row">
              <div class="col-12 col-md-6">
                <q-carousel
                  v-model="hackathon.activeSlide"
                  arrows
                  navigation
                  infinite
                  :autoplay="3000"
                  class="hackathon-slider"
                >
                  <q-carousel-slide
                    v-for="(image, index) in hackathon.images"
                    :key="index"
                    :name="index"
                  >
                    <q-img :src="image" :ratio="16 / 9" />
                  </q-carousel-slide>
                </q-carousel>
              </div>

              <!-- Hackathon Information -->
              <div class="col-12 col-md-6 q-pa-md">
                <div class="row justify-between items-center q-mb-md">
                  <div class="text-h5 text-weight-bold text-white">{{ hackathon.title }}</div>
                  <q-btn
                    flat
                    round
                    color="negative"
                    icon="delete"
                    @click="confirmDelete(hackathon)"
                  >
                    <q-tooltip>Delete Hackathon</q-tooltip>
                  </q-btn>
                </div>
                <div class="text-caption text-grey-5 q-mb-md">{{ hackathon.date }}</div>
                <p class="text-body1 text-grey-4 q-mb-md">{{ hackathon.description }}</p>

                <!-- Winners Section -->
                <div class="winners-section q-mb-lg">
                  <div class="text-subtitle1 text-weight-bold text-white q-mb-sm">Winners</div>
                  <div
                    v-for="winner in hackathon.winners"
                    :key="winner.position"
                    class="winner-card q-pa-sm q-mb-sm"
                  >
                    <div class="row items-center">
                      <q-avatar size="40px" class="q-mr-md">
                        <img :src="winner.teamLogo" />
                      </q-avatar>
                      <div>
                        <div class="text-subtitle2 text-weight-bold text-white">
                          {{ winner.teamName }}
                        </div>
                        <div class="text-caption text-grey-5">
                          {{ winner.position }} Place • {{ winner.prize }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <q-btn
                  v-if="hackathon.canAddWinners"
                  unelevated
                  class="gradient-btn-secondary q-px-md"
                  @click="openAddWinnerDialog(hackathon.id)"
                >
                  Add Winner
                </q-btn>
              </div>
            </div>
          </q-card>
        </div>
      </div>
    </div>

    <div id="unstop-hackathons" class="unstop-hackathons q-pa-xl">
      <div class="row items-center justify-between q-mb-xl">
        <h2 class="text-h4 text-weight-bold text-white">Upcoming Hackathons from Unstop</h2>
        <q-btn
          flat
          round
          color="primary"
          icon="refresh"
          @click="fetchUnstopHackathons"
          :loading="unstopLoading"
        >
          <q-tooltip>Refresh Hackathons</q-tooltip>
        </q-btn>
      </div>

      <div v-if="unstopLoading" class="row justify-center q-pa-xl">
        <q-spinner-dots color="primary" size="40px" />
      </div>

      <div v-else class="row q-col-gutter-xl">
        <div
          v-for="hackathon in unstopHackathons"
          :key="hackathon.id"
          class="col-12 col-md-6 col-lg-4"
        >
          <q-card class="hackathon-card">
            <q-img :src="hackathon.images[0]" :ratio="16 / 9">
              <div class="absolute-bottom text-subtitle2 text-white">
                {{ hackathon.title }}
              </div>
            </q-img>
            <q-card-section>
              <div class="text-subtitle1 text-weight-bold text-white q-mb-sm">
                {{ hackathon.title }}
              </div>
              <div class="text-caption text-grey-5 q-mb-md">{{ hackathon.date }}</div>
              <p class="text-body2 text-grey-4 q-mb-md">{{ hackathon.description }}</p>
              <div class="row items-center justify-between">
                <div class="text-caption text-grey-5">
                  <q-icon name="location_on" size="xs" class="q-mr-xs" />
                  {{ hackathon.location }}
                </div>
                <div class="text-caption text-grey-5">
                  <q-icon name="group" size="xs" class="q-mr-xs" />
                  {{ hackathon.participantsCount }} participants
                </div>
              </div>
            </q-card-section>
            <q-card-actions>
              <q-btn
                flat
                color="primary"
                label="View Details"
                @click="openHackathonDetails(hackathon)"
              />
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>

    <q-dialog v-model="showAddWinnerDialog">
      <q-card class="add-winner-dialog">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6 text-weight-bold">Add Winner</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section>
          <q-form @submit="onSubmitWinner" class="q-gutter-md">
            <q-input
              v-model="newWinner.teamName"
              label="Team Name"
              filled
              :rules="[(val) => !!val || 'Team name is required']"
            />

            <q-select
              v-model="newWinner.position"
              :options="['1st', '2nd', '3rd', 'Runner Up']"
              label="Position"
              filled
              :rules="[(val) => !!val || 'Position is required']"
            />

            <q-input
              v-model="newWinner.prize"
              label="Prize"
              filled
              :rules="[(val) => !!val || 'Prize is required']"
            />

            <q-file
              v-model="newWinner.teamLogo"
              label="Team Logo"
              filled
              accept=".jpg,.png,.svg"
              :rules="[(val) => !!val || 'Team logo is required']"
            />

            <div class="row justify-end q-mt-md">
              <q-btn label="Cancel" flat v-close-popup class="q-mr-sm" />
              <q-btn label="Add Winner" type="submit" unelevated class="gradient-btn" />
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>

    <q-dialog v-model="showAddHackathonDialog">
      <q-card class="add-hackathon-dialog">
        <q-card-section class="row items-center">
          <div class="text-h6">Add Past Hackathon</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-form @submit="onSubmitHackathon">
          <q-card-section class="q-gutter-md">
            <q-input
              v-model="newHackathon.title"
              label="Hackathon Title"
              filled
              :rules="[(val) => !!val || 'Title is required']"
            />

            <q-input
              v-model="newHackathon.description"
              label="Description"
              type="textarea"
              filled
              :rules="[(val) => !!val || 'Description is required']"
            />

            <q-select
              v-model="newHackathon.category"
              :options="categories"
              label="Category"
              filled
              :rules="[(val) => !!val || 'Category is required']"
            />

            <div class="row q-col-gutter-md">
              <div class="col-12 col-md-6">
                <q-input
                  v-model="newHackathon.date"
                  label="Event Date"
                  filled
                  type="date"
                  :rules="[(val) => !!val || 'Date is required']"
                />
              </div>
              <div class="col-12 col-md-6">
                <q-input
                  v-model="newHackathon.location"
                  label="Location"
                  filled
                  :rules="[(val) => !!val || 'Location is required']"
                />
              </div>
            </div>

            <q-input
              v-model.number="newHackathon.participantsCount"
              label="Number of Participants"
              type="number"
              filled
              :rules="[
                (val) => !!val || 'Participants count is required',
                (val) => val > 0 || 'Must be greater than 0',
              ]"
            />

            <q-file
              v-model="newHackathon.images"
              label="Upload Images"
              filled
              multiple
              accept="image/*"
              :rules="[(val) => val?.length > 0 || 'At least one image is required']"
            >
              <template v-slot:prepend>
                <q-icon name="photo_library" />
              </template>
            </q-file>
          </q-card-section>

          <q-card-actions align="right" class="q-pa-md">
            <q-btn flat label="Cancel" v-close-popup />
            <q-btn type="submit" class="gradient-btn" label="Add Hackathon" />
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>

    <!-- Add Delete Confirmation Dialog -->
    <q-dialog v-model="showDeleteDialog" persistent>
      <q-card class="delete-dialog">
        <q-card-section class="row items-center">
          <q-avatar icon="warning" color="negative" text-color="white" />
          <span class="q-ml-sm text-h6">Delete Hackathon</span>
        </q-card-section>

        <q-card-section class="q-pt-none">
          Are you sure you want to delete this hackathon? This action cannot be undone.
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn
            flat
            label="Delete"
            color="negative"
            @click="deleteHackathon"
            :loading="deleting"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <q-dialog v-model="showHackathonDetailsDialog" maximized>
      <q-card class="hackathon-details-dialog">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6 text-weight-bold">Hackathon Details</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section v-if="selectedHackathon" class="q-pa-lg">
          <div class="row q-col-gutter-xl">
            <div class="col-12 col-md-8">
              <q-carousel
                v-model="selectedHackathon.activeSlide"
                arrows
                navigation
                infinite
                :autoplay="3000"
                class="hackathon-slider"
                animated
                swipeable
                transition-prev="slide-right"
                transition-next="slide-left"
              >
                <q-carousel-slide
                  v-for="(image, index) in selectedHackathon.images"
                  :key="index"
                  :name="index"
                >
                  <q-img :src="image" :ratio="16 / 9" />
                </q-carousel-slide>
              </q-carousel>

              <div class="text-h5 text-weight-bold text-white q-mt-lg">
                {{ selectedHackathon.title }}
              </div>
              <div class="text-caption text-grey-5 q-mb-md">{{ selectedHackathon.date }}</div>
              <p class="text-body1 text-grey-4 q-mb-md">{{ selectedHackathon.description }}</p>

              <div class="row q-col-gutter-md q-mb-lg">
                <div class="col-12 col-sm-6">
                  <q-card class="info-card">
                    <q-card-section>
                      <div class="text-subtitle1 text-weight-bold text-white q-mb-sm">Location</div>
                      <div class="text-body2 text-grey-4">
                        <q-icon name="location_on" size="sm" class="q-mr-sm" />
                        {{ selectedHackathon.location }}
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
                <div class="col-12 col-sm-6">
                  <q-card class="info-card">
                    <q-card-section>
                      <div class="text-subtitle1 text-weight-bold text-white q-mb-sm">
                        Participants
                      </div>
                      <div class="text-body2 text-grey-4">
                        <q-icon name="group" size="sm" class="q-mr-sm" />
                        {{ selectedHackathon.participantsCount }}
                      </div>
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-4">
              <q-card class="info-card">
                <q-card-section>
                  <div class="text-subtitle1 text-weight-bold text-white q-mb-md">
                    Additional Information
                  </div>
                  <div class="q-gutter-y-md">
                    <div>
                      <div class="text-caption text-grey-5">Category</div>
                      <div class="text-body2 text-white">{{ selectedHackathon.category }}</div>
                    </div>
                    <div v-if="selectedHackathon.prize_pool">
                      <div class="text-caption text-grey-5">Prize Pool</div>
                      <div class="text-body2 text-white">{{ selectedHackathon.prize_pool }}</div>
                    </div>
                    <div v-if="selectedHackathon.registration_deadline">
                      <div class="text-caption text-grey-5">Registration Deadline</div>
                      <div class="text-body2 text-white">
                        {{ selectedHackathon.registration_deadline }}
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>

              <q-card v-if="selectedHackathon.winners?.length" class="info-card q-mt-md">
                <q-card-section>
                  <div class="text-subtitle1 text-weight-bold text-white q-mb-md">Winners</div>
                  <div class="q-gutter-y-sm">
                    <div
                      v-for="winner in selectedHackathon.winners"
                      :key="winner.position"
                      class="winner-card q-pa-sm"
                    >
                      <div class="row items-center">
                        <q-avatar size="40px" class="q-mr-md">
                          <img :src="winner.teamLogo" />
                        </q-avatar>
                        <div>
                          <div class="text-subtitle2 text-weight-bold text-white">
                            {{ winner.teamName }}
                          </div>
                          <div class="text-caption text-grey-5">
                            {{ winner.position }} Place • {{ winner.prize }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useQuasar } from 'quasar'
import { unstopService } from 'src/services/unstopService'

const $q = useQuasar()

// Import your images at the top of the script
import hackathonImage1 from 'src/assets/WhatsApp Image 2025-02-16 at 22.18.23.jpeg'
import hackathonImage2 from 'src/assets/WhatsApp Image 2025-02-16 at 22.18.24 (1).jpeg'
import hackathonImage3 from 'src/assets/WhatsApp Image 2025-02-16 at 22.18.24.jpeg'
import teamLogo1 from 'src/assets/WhatsApp Image 2024-08-30 at 22.32.46.jpeg'

const loading = ref(true)
const submittingHackathon = ref(false)
const submittingWinner = ref(false)
const unstopHackathons = ref([])
const unstopLoading = ref(false)

const pastHackathons = ref([
  {
    id: 1,
    title: 'SMART INDIA HAKATHON 2024',
    description:
      'The Smart India Hackathon (SIH) is a nationwide initiative by the Government of India to encourage innovation, problem-solving, and technological development among students. It provides a platform for young minds to solve real-world challenges faced by various government departments, industries, and organizations.',
    category: 'AI & Machine Learning',
    date: '2024-12-11',
    participantsCount: 20,
    images: [hackathonImage1, hackathonImage2, hackathonImage3], // Use imported images
    activeSlide: 0,
    canAddWinners: true,
    winners: [
      {
        teamName: 'BYTE_KNIGHTS',
        position: '2ND',
        prize: '',
        teamLogo: teamLogo1,
      },
    ],
  },
])

const showAddWinnerDialog = ref(false)
const selectedHackathonId = ref(null)
const newWinner = ref({
  teamName: '',
  position: '',
  prize: '',
  teamLogo: null,
})

function openAddWinnerDialog(hackathonId) {
  selectedHackathonId.value = hackathonId
  showAddWinnerDialog.value = true
}

// Function to fetch hackathons from Unstop
async function fetchUnstopHackathons() {
  unstopLoading.value = true
  try {
    const data = await unstopService.getHackathons()
    unstopHackathons.value = data.map((hackathon) => ({
      id: hackathon.id,
      title: hackathon.title,
      description: hackathon.description,
      category: hackathon.category,
      date: hackathon.start_date,
      location: hackathon.location,
      participantsCount: hackathon.max_participants,
      images: [hackathon.banner_image],
      activeSlide: 0,
      canAddWinners: false,
      winners: [],
      source: 'unstop',
    }))
  } catch (error) {
    console.error('Error fetching Unstop hackathons:', error)
    $q.notify({
      type: 'negative',
      message: 'Failed to fetch hackathons from Unstop',
    })
  } finally {
    unstopLoading.value = false
  }
}

// Load data on component mount
onMounted(async () => {
  try {
    // Load past hackathons from localStorage
    const savedHackathons = localStorage.getItem('pastHackathons')
    if (savedHackathons) {
      pastHackathons.value = JSON.parse(savedHackathons)
    }

    // Fetch hackathons from Unstop
    await fetchUnstopHackathons()
  } catch (error) {
    console.error('Error loading data:', error)
    $q.notify({
      type: 'negative',
      message: 'Failed to load data',
    })
  } finally {
    loading.value = false
  }
})

// Save past hackathons to localStorage whenever they change
watch(
  pastHackathons,
  (newValue) => {
    try {
      localStorage.setItem('pastHackathons', JSON.stringify(newValue))
    } catch (error) {
      console.error('Error saving hackathons:', error)
      $q.notify({
        type: 'negative',
        message: 'Failed to save hackathon data',
      })
    }
  },
  { deep: true },
)

// Convert File to Base64
function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}

async function onSubmitWinner() {
  submittingWinner.value = true
  try {
    const hackathon = pastHackathons.value.find((h) => h.id === selectedHackathonId.value)
    if (hackathon) {
      // Convert team logo to base64
      const teamLogoBase64 = await fileToBase64(newWinner.value.teamLogo)

      const winnerData = {
        teamName: newWinner.value.teamName,
        position: newWinner.value.position,
        prize: newWinner.value.prize,
        teamLogo: teamLogoBase64,
      }

      if (!hackathon.winners) {
        hackathon.winners = []
      }
      hackathon.winners.push(winnerData)

      $q.notify({
        type: 'positive',
        message: 'Winner added successfully!',
      })
    }
  } catch (error) {
    console.error('Error adding winner:', error)
    $q.notify({
      type: 'negative',
      message: 'Failed to add winner',
    })
  } finally {
    submittingWinner.value = false
    newWinner.value = {
      teamName: '',
      position: '',
      prize: '',
      teamLogo: null,
    }
    showAddWinnerDialog.value = false
  }
}

const categories = [
  'AI & Machine Learning',
  'Web Development',
  'Mobile Apps',
  'Blockchain',
  'Game Development',
  'IoT',
  'Cybersecurity',
  'Data Science',
  'Cloud Computing',
  'AR/VR',
]

const showAddHackathonDialog = ref(false)
const newHackathon = ref({
  title: '',
  description: '',
  category: '',
  date: '',
  location: '',
  participantsCount: null,
  images: [],
})

function openAddHackathonDialog() {
  showAddHackathonDialog.value = true
}

async function onSubmitHackathon() {
  submittingHackathon.value = true
  try {
    // Convert all images to base64
    const imagePromises = Array.from(newHackathon.value.images).map((file) => fileToBase64(file))
    const imageUrls = await Promise.all(imagePromises)

    const hackathonData = {
      ...newHackathon.value,
      images: imageUrls,
      id: Date.now(),
      status: 'completed',
      winners: [],
      canAddWinners: true,
    }

    pastHackathons.value.push(hackathonData)

    $q.notify({
      type: 'positive',
      message: 'Hackathon added successfully!',
    })
  } catch (error) {
    console.error('Error adding hackathon:', error)
    $q.notify({
      type: 'negative',
      message: 'Failed to add hackathon',
    })
  } finally {
    submittingHackathon.value = false
    newHackathon.value = {
      title: '',
      description: '',
      category: '',
      date: '',
      location: '',
      participantsCount: null,
      images: [],
    }
    showAddHackathonDialog.value = false
  }
}

const showDeleteDialog = ref(false)
const deleting = ref(false)
const hackathonToDelete = ref(null)

function confirmDelete(hackathon) {
  hackathonToDelete.value = hackathon
  showDeleteDialog.value = true
}

async function deleteHackathon() {
  if (!hackathonToDelete.value) return

  deleting.value = true
  try {
    const index = pastHackathons.value.findIndex((h) => h.id === hackathonToDelete.value.id)
    if (index !== -1) {
      pastHackathons.value.splice(index, 1)
      $q.notify({
        type: 'positive',
        message: 'Hackathon deleted successfully!',
      })
    }
  } catch (error) {
    console.error('Error deleting hackathon:', error)
    $q.notify({
      type: 'negative',
      message: 'Failed to delete hackathon',
    })
  } finally {
    deleting.value = false
    showDeleteDialog.value = false
    hackathonToDelete.value = null
  }
}

const showHackathonDetailsDialog = ref(false)
const selectedHackathon = ref(null)

async function openHackathonDetails(hackathon) {
  if (hackathon.source === 'unstop') {
    try {
      const details = await unstopService.getHackathonDetails(hackathon.id)
      selectedHackathon.value = {
        ...hackathon,
        ...details,
      }
      showHackathonDetailsDialog.value = true
    } catch (error) {
      console.error('Error fetching hackathon details:', error)
      $q.notify({
        type: 'negative',
        message: 'Failed to fetch hackathon details',
      })
    }
  } else {
    selectedHackathon.value = hackathon
    showHackathonDetailsDialog.value = true
  }
}

const platformUrls = {
  unstop:
    'https://unstop.com/hackathons?oppstatus=open&domain=2&course=6&specialization=Computer%20Science%20and%20Engineering&usertype=students&passingOutYear=2028&quickApply=true',
  devpost: 'https://devpost.com/hackathons',
  hackerearth: 'https://www.hackerearth.com/challenges/hackathon/',
  reskilll: 'https://reskilll.com/allhacks',
}

function openHackathonPlatform(platform) {
  const url = platformUrls[platform]
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer')
  }
}
</script>

<style lang="scss" scoped>
.hero-section {
  min-height: 40vh;
  position: relative;
}

.hero-image {
  width: 400px;
  max-width: 100%;
  height: auto;
}

.gradient-btn {
  background: linear-gradient(45deg, $gradient-start, $gradient-end);
  border-radius: 25px;
  padding: 12px 32px;
  font-weight: 500;
}

.updates-grid {
  margin-top: -40px;
}

.update-card {
  background: $card-bg;
  border: 1px solid $card-border;
  border-radius: 16px;
  overflow: hidden;
  height: 100%;
  backdrop-filter: blur(10px);

  &.new-update {
    background: $card-new-bg;
    border: 2px dashed $card-new-border;

    .new-update-icon {
      width: 48px;
      height: 48px;
      background: rgba(73, 69, 255, 0.2);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
    }
  }
}

.update-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  background: rgba(14, 12, 42, 0.8);
  backdrop-filter: blur(8px);
}

.past-hackathons {
  background: linear-gradient(180deg, transparent 0%, rgba($dark, 0.5) 100%);
}

.hackathon-card {
  background: $card-bg;
  border: 1px solid $card-border;
  border-radius: 16px;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.hackathon-slider {
  height: 400px;

  .q-carousel__slide {
    padding: 0;
  }
}

.winner-card {
  background: rgba($primary, 0.1);
  border: 1px solid rgba($primary, 0.2);
  border-radius: 8px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(8px);
    background: rgba($primary, 0.15);
  }
}

.gradient-btn-secondary {
  background: linear-gradient(45deg, rgba($gradient-start, 0.1), rgba($gradient-end, 0.1));
  border: 1px solid $gradient-start;
  color: $gradient-start;
  border-radius: 25px;
  padding: 8px 24px;
  font-weight: 500;

  &:hover {
    background: linear-gradient(45deg, rgba($gradient-start, 0.2), rgba($gradient-end, 0.2));
  }
}

.add-winner-dialog {
  width: 400px;
  max-width: 90vw;
  background: $dark;
  color: white;
}

.add-hackathon-dialog {
  min-width: 500px;
  max-width: 90vw;
  background: $card-bg;
  border: 1px solid $card-border;
}

.gradient-btn {
  background: linear-gradient(45deg, $gradient-start, $gradient-end);

  &:hover {
    opacity: 0.9;
  }
}

.text-center {
  position: relative;
  z-index: 1;
  margin: -20px 0 20px;
}

.hackathon-card {
  background: $card-bg;
  border: 1px solid $card-border;
  transition: all 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
}

.hackathon-image-slide {
  padding: 0;
}

.hackathon-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
}

.delete-dialog {
  background: $card-bg;
  border: 1px solid $card-border;
  border-radius: 16px;
  backdrop-filter: blur(10px);
  min-width: 300px;
  max-width: 90vw;

  .q-card__section {
    padding: 24px;
  }
}

.unstop-hackathons {
  background: linear-gradient(180deg, transparent 0%, rgba($dark, 0.5) 100%);
  margin-top: 2rem;
}

.hackathon-details-dialog {
  background: $dark;
  color: white;

  .info-card {
    background: rgba($card-bg, 0.5);
    border: 1px solid $card-border;
    backdrop-filter: blur(10px);
  }
}

.platform-card {
  background: linear-gradient(135deg, rgba($primary, 0.1), rgba($dark, 0.95));
  border: 1px solid $card-border;
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.platform-btn {
  height: 140px;
  border: 1px solid currentColor;
  border-radius: 16px;
  padding: 20px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }

  .platform-name {
    font-size: 1.1rem;
    font-weight: 500;
  }

  .q-icon {
    font-size: 32px;
  }
}

.new-update-icon {
  width: 56px;
  height: 56px;
  background: rgba($primary, 0.2);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
